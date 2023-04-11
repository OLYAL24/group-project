const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btbPopup = document.querySelector('.btblogin-popup');
const close = document.querySelector('.iconclose');


registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active')
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active')
});

btbPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
});

close.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
});

