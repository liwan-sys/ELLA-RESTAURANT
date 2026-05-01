(function () {
    'use strict';

    const burger = document.querySelector('.menu-btn');
    const nav = document.querySelector('#primary-nav ul');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('open');
            burger.setAttribute('aria-expanded', String(isOpen));
            burger.textContent = isOpen ? '✕' : '☰';
        });

        nav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
                burger.setAttribute('aria-expanded', 'false');
                burger.textContent = '☰';
            });
        });
    }

    const tabButtons = document.querySelectorAll('.tab-btn');
    const drinkLists = document.querySelectorAll('.drink-list');

    tabButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;
            if (!target) return;

            tabButtons.forEach((b) => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            drinkLists.forEach((list) => {
                list.classList.toggle('active', list.id === target);
            });
        });
    });

    const form = document.querySelector('#reservation-form');
    const success = document.querySelector('#form-success');

    if (form && success) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            success.classList.add('show');
            form.reset();
            success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });

        const dateInput = form.querySelector('#date');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.min = today;
        }
    }
})();
