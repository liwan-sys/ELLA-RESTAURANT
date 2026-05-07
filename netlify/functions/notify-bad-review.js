// Netlify Function : notifie le manager via Telegram quand un avis < 4 étoiles tombe.
//
// Configuration requise dans Netlify (Site settings -> Build & deploy -> Environment) :
//   TELEGRAM_BOT_TOKEN  -> token du bot fourni par @BotFather
//   TELEGRAM_CHAT_ID    -> chat ID du destinataire (récupérable via @userinfobot)
//
// Cette fonction est appelée depuis commander.html après l'envoi d'un feedback < 4.
// Le client n'a JAMAIS accès au token (il est chargé côté serveur via process.env).

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method not allowed' };
    }

    const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TOKEN || !CHAT_ID) {
        return { statusCode: 200, body: JSON.stringify({ skipped: 'missing-config' }) };
    }

    let body;
    try { body = JSON.parse(event.body || '{}'); }
    catch (e) { return { statusCode: 400, body: 'Invalid JSON' }; }

    const rating = Number(body.rating);
    if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
        return { statusCode: 400, body: 'Invalid rating' };
    }

    // Sanitize les champs texte
    const safe = (s, max = 500) => String(s ?? '').slice(0, max).replace(/[<>]/g, '');
    const firstName = safe(body.firstName, 50);
    const table = body.table != null ? safe(String(body.table), 10) : '';
    const comment = safe(body.comment, 1000);

    // Construction du message Markdown
    const stars = '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
    let message = `🚨 *Avis client Ella* — ${rating}/5\n\n${stars}\n`;
    if (firstName) message += `\n👤 ${firstName}`;
    if (table) message += `\n🪑 Table ${table}`;
    if (comment) message += `\n\n💬 _${comment}_`;
    message += `\n\n[Voir tous les avis](https://ellarestaurant.fr/admin-clients.html)`;

    try {
        const resp = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'Markdown',
                disable_web_page_preview: true
            })
        });
        if (!resp.ok) {
            const errText = await resp.text();
            return { statusCode: 502, body: 'Telegram error: ' + errText.slice(0, 200) };
        }
        return { statusCode: 200, body: JSON.stringify({ sent: true }) };
    } catch (err) {
        return { statusCode: 500, body: 'Server error: ' + (err.message || 'unknown') };
    }
};
