document.querySelector('.menu-tbn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
})
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });