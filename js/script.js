const loginbutton = document.querySelector('.login-button');
loginbutton.addEventListener('click', () => {
    document.querySelector('.login-popup').classList.toggle('login-popup-active');
});

const crossbutton = document.querySelector('.cross-button');
crossbutton.addEventListener('click', () => {
    document.querySelector('.login-popup').classList.toggle('login-popup-active');
});
