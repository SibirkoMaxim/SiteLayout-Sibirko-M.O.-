const loginbutton = document.querySelector('.login-button');
loginbutton.addEventListener('click', () => {
    document.querySelector('.login-popup').classList.toggle('login-popup-active');
});
