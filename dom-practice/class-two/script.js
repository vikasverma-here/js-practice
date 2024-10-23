const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const ul = document.querySelector('ul')
const nav = document.querySelector('nav')
menu.addEventListener('click',()=>{
    console.log("clicked")
    nav.style.height='20%'
    close.style.display='initial'
    menu.style.display='none'
    // ul.style.flex-direction ='column'
})
close.addEventListener('click',()=>{
    console.log("clicked")
    nav.style.height='10%'
    close.style.display='none'
    menu.style.display='initial'

})
