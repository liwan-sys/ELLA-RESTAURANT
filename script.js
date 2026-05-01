(function () {
    'use strict';

    // Burger mobile
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

    // Header qui se compacte au scroll
    const header = document.querySelector('header');
    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }

    // Animations au scroll (IntersectionObserver)
    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealElements.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });
        revealElements.forEach((el) => observer.observe(el));
    } else {
        revealElements.forEach((el) => el.classList.add('is-visible'));
    }

    // Onglets boissons
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

    // Formulaire de réservation
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
