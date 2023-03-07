let navbar = document.querySelector('.header .flex .navbar')
document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active')
}
let acount = document.querySelector('.user-acount ')
document.querySelector('#user-btn').onclick = ()=>{
    acount.classList.add('active')
}
document.querySelector('#close-acount').onclick = ()=>{
    acount.classList.remove('active')
}
let cart = document.querySelector('.shopping-cart ')
document.querySelector('#cart-btn').onclick = ()=>{
    cart.classList.add('active')
}
document.querySelector('#close-cart').onclick = ()=>{
    cart.classList.remove('active')
}
window.onscroll = () =>{
    navbar.classList.remove('active')
    cart.classList.remove('active')
}
let slides = document.querySelectorAll('.home-bg .home .slide-container .slide')
let index=0
function next(){
    slides[index].classList.remove('active')
    index = (index + 1) % slides.length
    slides[index].classList.add('active')
}
function prev(){
    slides[index].classList.remove('active')
    index = (index - 1 + slides.length) % slides.length
    slides[index].classList.add('active')
}
