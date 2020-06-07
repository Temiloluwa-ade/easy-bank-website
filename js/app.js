const navToggle = document.querySelector('.mobiile-btn');

const navBar = document.querySelectorAll('.nav-link ul')

navToggle.addEventListener('click', function () {
    navBar.classList.add('nav-active');

});