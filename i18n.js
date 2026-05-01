(function () {
    'use strict';

    const TRANSLATIONS = {
        fr: {
            'nav.home': 'Accueil',
            'nav.menu': 'Menu',
            'nav.experience': 'Expérience',
            'nav.drinks': 'Boissons',
            'nav.gallery': 'Galerie',
            'nav.history': 'Histoire',
            'nav.reservation': 'Réservation',

            'hero.eyebrow': 'Restaurant turc · 10ème Paris',
            'hero.title.l1': 'L\'Âme',
            'hero.title.l2': 'du Grill',
            'hero.title.l3': 'Anatolien',
            'hero.subtitle': 'Héritage. Saveurs. Générosité.',
            'hero.cta.book': 'Réserver une table',
            'hero.cta.menu': 'Voir le menu',
            'hero.scroll': 'Découvrir',

            'feature.1.title': 'Un lieu<br>chargé d\'histoire',
            'feature.2.title': 'Des saveurs<br>authentiques',
            'feature.3.title': 'Une expérience<br>intemporelle',
            'feature.1.arrow': 'Découvrir →',
            'feature.2.arrow': 'Voir le menu →',
            'feature.3.arrow': 'Réserver →',

            'reviews.title': 'Ce qu\'ils en disent',
            'reviews.stat1.value': '4,4 / 5',
            'reviews.stat1.label': '+ de 1 500 avis',
            'reviews.stat2.value': '9,3 / 10',
            'reviews.stat2.label': 'Note TheFork',
            'reviews.1.quote': 'Le meilleur künefe de ma vie. Le service était excellent et le personnel très chaleureux.',
            'reviews.1.cite': '— Avis Tripadvisor',
            'reviews.2.quote': 'Tout était délicieux, et le dessert à tomber. Une véritable expérience turque, généreuse et authentique.',
            'reviews.2.cite': '— Avis TheFork',
            'reviews.3.quote': 'Un des meilleurs döner kebab que j\'ai mangé en dehors de la Turquie. Viandes grillées au charbon, kofte haché au couteau : du vrai savoir-faire.',
            'reviews.3.cite': '— Avis Yelp',

            'footer.address': '14 rue du Faubourg Saint-Denis · 75010 Paris',
            'footer.contact': '01 47 70 20 95 · Ouvert 7j/7 de 11h à minuit',
            'footer.copyright': '© 2026 Ella · L\'Âme du Grill Anatolien',

            'menu.eyebrow': 'La carte',
            'menu.title': 'Notre Carte',
            'menu.intro': 'Une cuisine fidèle aux traditions anatoliennes, où chaque plat est cuit au feu de bois et inspiré des recettes familiales transmises de génération en génération.',
            'menu.cat.cold': 'Mezzes Froids',
            'menu.cat.hot': 'Mezzes Chauds',
            'menu.cat.grill': 'Grillades · Du Mangal',
            'menu.cat.specialties': 'Spécialités de la maison',
            'menu.cat.desserts': 'Desserts',
            'menu.cat.formulas': 'Menus & Formules',

            'exp.eyebrow': 'L\'expérience Ella',
            'exp.title.l1': 'Une expérience',
            'exp.title.l2': 'à',
            'exp.title.l3': 'vivre',
            'exp.intro': 'Au-delà du repas, Ella vous invite à un voyage sensoriel : le crépitement du charbon, le parfum des épices, la chaleur d\'un service attentionné. Tout y est conçu pour vous transporter au cœur de l\'Anatolie.',
            'exp.cta': 'Réserver une table',
            'exp.f1.title': 'Le Feu',
            'exp.f1.text': 'Toutes nos viandes sont saisies au mangal, sur charbon de bois de chêne, comme dans les villages d\'Anatolie.',
            'exp.f2.title': 'L\'Héritage',
            'exp.f2.text': 'Des recettes transmises depuis trois générations, fidèles à l\'esprit des grandes tables familiales turques.',
            'exp.f3.title': 'L\'Hospitalité',
            'exp.f3.text': 'Chez nous, chaque convive devient un invité. Le partage, le thé offert, les sourires : c\'est l\'âme turque.',
            'exp.mangal.eyebrow': 'Au cœur de la cuisine',
            'exp.mangal.title': 'Le Mangal',
            'exp.mangal.text': 'Au centre de notre cuisine se trouve le mangal, ce gril ancestral où le charbon de bois de chêne libère ses arômes profonds. C\'est ici que naissent les saveurs fumées et tendres de nos kebabs, dans le respect d\'un savoir-faire séculaire.',

            'drinks.eyebrow': 'La carte des boissons',
            'drinks.title': 'Notre Cave',
            'drinks.intro': 'Une sélection de raki, vins turcs et boissons traditionnelles pour accompagner chaque plat avec authenticité.',
            'drinks.tab.raki': 'Raki',
            'drinks.tab.wine': 'Vins',
            'drinks.tab.cocktails': 'Cocktails',
            'drinks.tab.soft': 'Sans alcool',
            'drinks.tab.tea': 'Thés & cafés',

            'gallery.eyebrow': 'Galerie',
            'gallery.title': 'Atmosphère',
            'gallery.intro': 'Quelques fragments de notre univers : la chaleur du feu, la douceur des lumières et la générosité des assiettes.',

            'hist.eyebrow': 'Une grande table',
            'hist.title': 'Notre Histoire',
            'hist.p1': 'Au 14 rue du Faubourg Saint-Denis, dans le 10ème arrondissement de Paris, Ella fait vivre les saveurs authentiques de la cuisine turque, kurde et anatolienne. Un restaurant familial pensé comme une grande table, ouvert 7 jours sur 7, du déjeuner jusqu\'à minuit.',
            'hist.chef.title': 'Le Chef',
            'hist.chef.text': 'Notre chef perpétue les recettes de sa grand-mère, originaire d\'Anatolie. Chaque plat est pensé comme un hommage : aux mains qui ont pétri, aux charbons qui ont rougi, aux invités qui ont ri. Ici, le kofte est haché au couteau — jamais à la machine — et chaque pide est cuit dans le four traditionnel.',
            'hist.philo.title': 'Notre Philosophie',
            'hist.philo.text': 'Le respect du produit, la simplicité du geste, la générosité du partage. Nous travaillons des viandes halal sélectionnées, des légumes de saison, et des épices rapportées directement des marchés d\'Anatolie.',
            'hist.living.title': 'Une cuisine vivante',
            'hist.living.text1': 'Nos pains sont cuits chaque jour au four à bois. Nos yaourts, fermentés maison. Nos kebabs, hachés au couteau. Tout est fait sur place, à la main, dans le respect d\'une tradition qui n\'a jamais cessé de vivre.',
            'hist.living.text2': 'Chez Ella, vous ne dînez pas : vous êtes reçus.',

            'res.eyebrow': 'Réserver',
            'res.title': 'Réserver une table',
            'res.intro': 'Pour partager un moment chez Ella, indiquez-nous votre préférence. Nous confirmerons votre réservation par e-mail ou téléphone dans les plus brefs délais.',
            'res.f.name': 'Nom',
            'res.f.email': 'E-mail',
            'res.f.phone': 'Téléphone',
            'res.f.guests': 'Nombre de convives',
            'res.f.guests.placeholder': '— Choisir —',
            'res.f.guest.1': '1 personne',
            'res.f.guest.2': '2 personnes',
            'res.f.guest.3': '3 personnes',
            'res.f.guest.4': '4 personnes',
            'res.f.guest.5': '5 personnes',
            'res.f.guest.6': '6 personnes',
            'res.f.guest.7': '7 personnes ou plus',
            'res.f.date': 'Date',
            'res.f.time': 'Heure',
            'res.f.message': 'Demande spéciale (facultatif)',
            'res.f.message.placeholder': 'Allergies, anniversaire, place près de la cheminée…',
            'res.f.submit': 'Envoyer ma demande',
            'res.f.success': 'Merci ! Votre demande de réservation a bien été envoyée. Nous vous recontacterons sous peu.',
            'res.info.address': 'Adresse',
            'res.info.phone': 'Téléphone',
            'res.info.hours': 'Horaires',
            'res.info.hours.line1': 'Ouvert 7j/7',
            'res.info.hours.line2': 'De 11h00 à minuit',
            'res.info.direct': 'Réservation directe',
            'res.info.direct.link': 'Réserver via TheFork',
            'res.map.eyebrow': 'Nous trouver',
            'res.map.title': 'À deux pas de la Porte Saint-Denis',
            'res.map.intro': 'Métro : Strasbourg–Saint-Denis (lignes 4, 8, 9) · Château d\'Eau (ligne 4)',
            'res.map.button': 'Itinéraire'
        },

        en: {
            'nav.home': 'Home',
            'nav.menu': 'Menu',
            'nav.experience': 'Experience',
            'nav.drinks': 'Drinks',
            'nav.gallery': 'Gallery',
            'nav.history': 'Story',
            'nav.reservation': 'Booking',

            'hero.eyebrow': 'Turkish restaurant · 10th, Paris',
            'hero.title.l1': 'The Soul',
            'hero.title.l2': 'of the',
            'hero.title.l3': 'Anatolian Grill',
            'hero.subtitle': 'Heritage. Flavours. Generosity.',
            'hero.cta.book': 'Book a table',
            'hero.cta.menu': 'View menu',
            'hero.scroll': 'Discover',

            'feature.1.title': 'A place steeped<br>in history',
            'feature.2.title': 'Authentic<br>flavours',
            'feature.3.title': 'A timeless<br>experience',
            'feature.1.arrow': 'Discover →',
            'feature.2.arrow': 'View menu →',
            'feature.3.arrow': 'Book →',

            'reviews.title': 'What guests are saying',
            'reviews.stat1.value': '4.4 / 5',
            'reviews.stat1.label': '1,500+ reviews',
            'reviews.stat2.value': '9.3 / 10',
            'reviews.stat2.label': 'TheFork rating',
            'reviews.1.quote': 'The best künefe of my life. The service was excellent and the staff so warm.',
            'reviews.1.cite': '— Tripadvisor review',
            'reviews.2.quote': 'Everything was delicious, and the dessert to die for. A truly Turkish, generous and authentic experience.',
            'reviews.2.cite': '— TheFork review',
            'reviews.3.quote': 'One of the best döner kebabs I\'ve had outside of Turkey. Coal-grilled meats, kofte hand-chopped: real craftsmanship.',
            'reviews.3.cite': '— Yelp review',

            'footer.address': '14 rue du Faubourg Saint-Denis · 75010 Paris',
            'footer.contact': '+33 1 47 70 20 95 · Open 7 days, 11am to midnight',
            'footer.copyright': '© 2026 Ella · The Soul of the Anatolian Grill',

            'menu.eyebrow': 'The menu',
            'menu.title': 'Our Menu',
            'menu.intro': 'A cuisine faithful to Anatolian traditions, where each dish is cooked over wood fire and inspired by family recipes passed down for generations.',
            'menu.cat.cold': 'Cold Mezze',
            'menu.cat.hot': 'Hot Mezze',
            'menu.cat.grill': 'Grills · From the Mangal',
            'menu.cat.specialties': 'House Specialties',
            'menu.cat.desserts': 'Desserts',
            'menu.cat.formulas': 'Set Menus',

            'exp.eyebrow': 'The Ella experience',
            'exp.title.l1': 'An experience',
            'exp.title.l2': 'to',
            'exp.title.l3': 'live',
            'exp.intro': 'Beyond a meal, Ella invites you on a sensory journey: the crackle of coal, the scent of spices, the warmth of attentive service. Everything is designed to take you to the heart of Anatolia.',
            'exp.cta': 'Book a table',
            'exp.f1.title': 'The Fire',
            'exp.f1.text': 'All our meats are seared on the mangal, over oak charcoal, just like in the villages of Anatolia.',
            'exp.f2.title': 'The Heritage',
            'exp.f2.text': 'Recipes passed down through three generations, true to the spirit of great Turkish family tables.',
            'exp.f3.title': 'The Hospitality',
            'exp.f3.text': 'Here, every guest becomes family. Sharing, complimentary tea, smiles: that\'s the Turkish soul.',
            'exp.mangal.eyebrow': 'At the heart of the kitchen',
            'exp.mangal.title': 'The Mangal',
            'exp.mangal.text': 'At the centre of our kitchen sits the mangal, the ancestral grill where oak charcoal releases its deep aromas. This is where the smoky, tender flavours of our kebabs are born, with respect for a centuries-old craft.',

            'drinks.eyebrow': 'The drinks list',
            'drinks.title': 'Our Cellar',
            'drinks.intro': 'A selection of raki, Turkish wines and traditional drinks to accompany every dish authentically.',
            'drinks.tab.raki': 'Raki',
            'drinks.tab.wine': 'Wines',
            'drinks.tab.cocktails': 'Cocktails',
            'drinks.tab.soft': 'Non-alcoholic',
            'drinks.tab.tea': 'Tea & Coffee',

            'gallery.eyebrow': 'Gallery',
            'gallery.title': 'Atmosphere',
            'gallery.intro': 'A few fragments of our world: the warmth of the fire, the softness of the lights, the generosity of the plates.',

            'hist.eyebrow': 'A great table',
            'hist.title': 'Our Story',
            'hist.p1': 'At 14 rue du Faubourg Saint-Denis, in the 10th arrondissement of Paris, Ella keeps alive the authentic flavours of Turkish, Kurdish and Anatolian cuisine. A family restaurant designed as a great table, open 7 days a week, from lunch until midnight.',
            'hist.chef.title': 'The Chef',
            'hist.chef.text': 'Our chef carries on his grandmother\'s recipes from Anatolia. Each dish is conceived as a tribute: to the hands that kneaded, the coals that glowed, the guests who laughed. Here, the kofte is chopped by knife — never machine — and every pide is cooked in the traditional oven.',
            'hist.philo.title': 'Our Philosophy',
            'hist.philo.text': 'Respect for the product, simplicity of gesture, generosity of sharing. We work with selected halal meats, seasonal vegetables, and spices brought directly from Anatolian markets.',
            'hist.living.title': 'A living cuisine',
            'hist.living.text1': 'Our breads are baked daily in the wood oven. Our yoghurts, fermented in-house. Our kebabs, hand-chopped. Everything is made on site, by hand, in the spirit of a tradition that has never stopped living.',
            'hist.living.text2': 'At Ella, you don\'t just dine: you are received.',

            'res.eyebrow': 'Book',
            'res.title': 'Book a table',
            'res.intro': 'To share a moment at Ella, let us know your preference. We will confirm your booking by e-mail or phone as soon as possible.',
            'res.f.name': 'Name',
            'res.f.email': 'E-mail',
            'res.f.phone': 'Phone',
            'res.f.guests': 'Number of guests',
            'res.f.guests.placeholder': '— Choose —',
            'res.f.guest.1': '1 person',
            'res.f.guest.2': '2 people',
            'res.f.guest.3': '3 people',
            'res.f.guest.4': '4 people',
            'res.f.guest.5': '5 people',
            'res.f.guest.6': '6 people',
            'res.f.guest.7': '7 people or more',
            'res.f.date': 'Date',
            'res.f.time': 'Time',
            'res.f.message': 'Special request (optional)',
            'res.f.message.placeholder': 'Allergies, birthday, table near the fireplace…',
            'res.f.submit': 'Send my request',
            'res.f.success': 'Thank you! Your booking request has been sent. We will get back to you shortly.',
            'res.info.address': 'Address',
            'res.info.phone': 'Phone',
            'res.info.hours': 'Hours',
            'res.info.hours.line1': 'Open 7 days a week',
            'res.info.hours.line2': 'From 11am to midnight',
            'res.info.direct': 'Direct booking',
            'res.info.direct.link': 'Book on TheFork',
            'res.map.eyebrow': 'Find us',
            'res.map.title': 'Steps from the Porte Saint-Denis',
            'res.map.intro': 'Metro: Strasbourg–Saint-Denis (lines 4, 8, 9) · Château d\'Eau (line 4)',
            'res.map.button': 'Get directions'
        },

        tr: {
            'nav.home': 'Anasayfa',
            'nav.menu': 'Menü',
            'nav.experience': 'Deneyim',
            'nav.drinks': 'İçecekler',
            'nav.gallery': 'Galeri',
            'nav.history': 'Hikaye',
            'nav.reservation': 'Rezervasyon',

            'hero.eyebrow': 'Türk restoranı · Paris 10. bölge',
            'hero.title.l1': 'Anadolu',
            'hero.title.l2': 'Mangalının',
            'hero.title.l3': 'Ruhu',
            'hero.subtitle': 'Miras. Lezzet. Cömertlik.',
            'hero.cta.book': 'Masa rezerve et',
            'hero.cta.menu': 'Menüyü gör',
            'hero.scroll': 'Keşfet',

            'feature.1.title': 'Tarihle<br>dolu bir mekân',
            'feature.2.title': 'Otantik<br>lezzetler',
            'feature.3.title': 'Zamansız<br>bir deneyim',
            'feature.1.arrow': 'Keşfet →',
            'feature.2.arrow': 'Menüyü gör →',
            'feature.3.arrow': 'Rezervasyon →',

            'reviews.title': 'Misafirlerimiz ne diyor',
            'reviews.stat1.value': '4,4 / 5',
            'reviews.stat1.label': '1 500+ değerlendirme',
            'reviews.stat2.value': '9,3 / 10',
            'reviews.stat2.label': 'TheFork puanı',
            'reviews.1.quote': 'Hayatımın en güzel künefesi. Servis mükemmeldi ve personel çok sıcakkanlıydı.',
            'reviews.1.cite': '— Tripadvisor yorumu',
            'reviews.2.quote': 'Her şey enfesti, tatlısı ise muhteşemdi. Gerçek bir Türk deneyimi: cömert ve otantik.',
            'reviews.2.cite': '— TheFork yorumu',
            'reviews.3.quote': 'Türkiye dışında yediğim en iyi döner kebaplardan biri. Kömürde pişmiş etler, bıçakla kıyılmış köfte — gerçek bir ustalık.',
            'reviews.3.cite': '— Yelp yorumu',

            'footer.address': '14 rue du Faubourg Saint-Denis · 75010 Paris',
            'footer.contact': '+33 1 47 70 20 95 · Haftanın 7 günü, 11.00 – 24.00',
            'footer.copyright': '© 2026 Ella · Anadolu Mangalının Ruhu',

            'menu.eyebrow': 'Menü',
            'menu.title': 'Menümüz',
            'menu.intro': 'Anadolu geleneklerine sadık bir mutfak: her yemek odun ateşinde pişer ve nesilden nesile aktarılan aile tariflerinden ilham alır.',
            'menu.cat.cold': 'Soğuk Mezeler',
            'menu.cat.hot': 'Sıcak Mezeler',
            'menu.cat.grill': 'Mangaldan',
            'menu.cat.specialties': 'Ev Spesiyalleri',
            'menu.cat.desserts': 'Tatlılar',
            'menu.cat.formulas': 'Menüler & Formüller',

            'exp.eyebrow': 'Ella deneyimi',
            'exp.title.l1': 'Yaşanacak',
            'exp.title.l2': 'bir',
            'exp.title.l3': 'deneyim',
            'exp.intro': 'Bir yemekten fazlası: Ella sizi duyusal bir yolculuğa çıkarır. Kömürün çıtırtısı, baharatların kokusu, özenli servisin sıcaklığı — her şey sizi Anadolu\'nun kalbine götürmek için tasarlandı.',
            'exp.cta': 'Masa rezerve et',
            'exp.f1.title': 'Ateş',
            'exp.f1.text': 'Tüm etlerimiz mangalda, meşe odunu kömüründe, tıpkı Anadolu köylerinde olduğu gibi pişirilir.',
            'exp.f2.title': 'Miras',
            'exp.f2.text': 'Üç kuşaktır aktarılan, büyük Türk aile sofralarının ruhuna sadık tarifler.',
            'exp.f3.title': 'Misafirperverlik',
            'exp.f3.text': 'Burada her misafir aileden biridir. Paylaşmak, ikram edilen çay, gülümsemeler — Türk ruhu budur.',
            'exp.mangal.eyebrow': 'Mutfağın kalbinde',
            'exp.mangal.title': 'Mangal',
            'exp.mangal.text': 'Mutfağımızın merkezinde mangal yer alır: meşe kömürünün derin aromalarını saldığı atalardan kalma ızgara. Kebaplarımızın dumanlı, yumuşak lezzetleri burada doğar — yüzyıllık bir ustalığın hakkını vererek.',

            'drinks.eyebrow': 'İçecek menüsü',
            'drinks.title': 'Şarap Mahzenimiz',
            'drinks.intro': 'Her yemeğe otantik bir şekilde eşlik etmek için rakı, Türk şarapları ve geleneksel içeceklerden bir seçki.',
            'drinks.tab.raki': 'Rakı',
            'drinks.tab.wine': 'Şaraplar',
            'drinks.tab.cocktails': 'Kokteyller',
            'drinks.tab.soft': 'Alkolsüz',
            'drinks.tab.tea': 'Çay & Kahve',

            'gallery.eyebrow': 'Galeri',
            'gallery.title': 'Atmosfer',
            'gallery.intro': 'Evrenimizden birkaç parça: ateşin sıcaklığı, ışıkların yumuşaklığı, tabakların cömertliği.',

            'hist.eyebrow': 'Büyük bir sofra',
            'hist.title': 'Hikayemiz',
            'hist.p1': 'Paris\'in 10. bölgesinde, 14 rue du Faubourg Saint-Denis adresinde Ella, Türk, Kürt ve Anadolu mutfağının otantik lezzetlerini yaşatıyor. Büyük bir sofra olarak tasarlanmış, haftanın 7 günü öğle yemeğinden gece yarısına kadar açık bir aile restoranı.',
            'hist.chef.title': 'Şef',
            'hist.chef.text': 'Şefimiz Anadolulu büyükannesinin tariflerini sürdürüyor. Her yemek bir saygı duruşudur: yoğuran ellere, kızaran kömürlere, gülen misafirlere. Burada köfte bıçakla kıyılır — asla makineyle — ve her pide geleneksel fırında pişer.',
            'hist.philo.title': 'Felsefemiz',
            'hist.philo.text': 'Ürüne saygı, hareketin sadeliği, paylaşmanın cömertliği. Seçilmiş helal etler, mevsim sebzeleri ve doğrudan Anadolu pazarlarından getirilen baharatlarla çalışıyoruz.',
            'hist.living.title': 'Yaşayan bir mutfak',
            'hist.living.text1': 'Ekmeklerimiz her gün odun fırınında pişer. Yoğurtlarımız evde mayalanır. Kebaplarımız bıçakla kıyılır. Her şey yerinde, elle, yaşamayı hiç bırakmamış bir geleneğe saygıyla yapılır.',
            'hist.living.text2': 'Ella\'da yemek yemezsiniz: ağırlanırsınız.',

            'res.eyebrow': 'Rezervasyon',
            'res.title': 'Masa rezerve et',
            'res.intro': 'Ella\'da bir an paylaşmak için tercihlerinizi belirtin. Rezervasyonunuzu en kısa sürede e-posta veya telefonla onaylayacağız.',
            'res.f.name': 'İsim',
            'res.f.email': 'E-posta',
            'res.f.phone': 'Telefon',
            'res.f.guests': 'Kişi sayısı',
            'res.f.guests.placeholder': '— Seçin —',
            'res.f.guest.1': '1 kişi',
            'res.f.guest.2': '2 kişi',
            'res.f.guest.3': '3 kişi',
            'res.f.guest.4': '4 kişi',
            'res.f.guest.5': '5 kişi',
            'res.f.guest.6': '6 kişi',
            'res.f.guest.7': '7 kişi ve üzeri',
            'res.f.date': 'Tarih',
            'res.f.time': 'Saat',
            'res.f.message': 'Özel istek (isteğe bağlı)',
            'res.f.message.placeholder': 'Alerjiler, doğum günü, şömine yanı masa…',
            'res.f.submit': 'Talebimi gönder',
            'res.f.success': 'Teşekkürler! Rezervasyon talebiniz gönderildi. Kısa sürede size geri döneceğiz.',
            'res.info.address': 'Adres',
            'res.info.phone': 'Telefon',
            'res.info.hours': 'Saatler',
            'res.info.hours.line1': 'Haftanın 7 günü açık',
            'res.info.hours.line2': '11.00 – 24.00 arası',
            'res.info.direct': 'Doğrudan rezervasyon',
            'res.info.direct.link': 'TheFork üzerinden rezerve et',
            'res.map.eyebrow': 'Bizi bulun',
            'res.map.title': 'Porte Saint-Denis\'e iki adım',
            'res.map.intro': 'Metro: Strasbourg–Saint-Denis (4, 8, 9. hatlar) · Château d\'Eau (4. hat)',
            'res.map.button': 'Yol tarifi'
        }
    };

    const SUPPORTED = ['fr', 'en', 'tr'];
    const STORAGE_KEY = 'ella-lang';

    function getInitialLang() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored && SUPPORTED.includes(stored)) return stored;
        const browser = (navigator.language || 'fr').slice(0, 2).toLowerCase();
        if (SUPPORTED.includes(browser)) return browser;
        return 'fr';
    }

    function applyLang(lang) {
        if (!SUPPORTED.includes(lang)) lang = 'fr';
        const dict = TRANSLATIONS[lang];
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
            const config = el.getAttribute('data-i18n-attr');
            config.split(';').forEach((pair) => {
                const [attr, key] = pair.split(':').map((s) => s.trim());
                if (attr && key && dict[key] !== undefined) {
                    el.setAttribute(attr, dict[key]);
                }
            });
        });

        document.querySelectorAll('.lang-switch button').forEach((btn) => {
            const isActive = btn.dataset.lang === lang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', String(isActive));
        });

        localStorage.setItem(STORAGE_KEY, lang);
    }

    document.addEventListener('click', (event) => {
        const btn = event.target.closest('.lang-switch button');
        if (!btn) return;
        const lang = btn.dataset.lang;
        if (lang) applyLang(lang);
    });

    document.addEventListener('DOMContentLoaded', () => {
        applyLang(getInitialLang());
    });
})();
