document.addEventListener('DOMContentLoaded', function () {
    var mobileMenu = document.getElementById('mobile-menu');
    var navbar = document.querySelector('.navbar');

    mobileMenu.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });
});
