// const  bodyDark = document.getElementById(" bodyDark")
// const  sectionDark = document.getElementById(" sectionDark")
// // const body = document.getElementById("body")
// const section = document.getElementById("section")
// const body = document.body

// bodyDark.addEventListener( 'click', ()=>{
//     if(body.classList.contains('body-light')){
//         body.classList.remove('body-light')
//         body.classList.add('body-dark')
//     }
//    else if(body.classList.contains('body-dark')){
//         body.classList.remove('body-dark')
//         body.classList.add('body-light')
//     }
    
// console.log("clicked")
// })
// sectionDark.addEventListener( 'click', ()=>{
//     if(section.classList.contains('section-light')){
//         section.classList.remove('section-light')
//         section.classList.add('section-dark')
//     }
//    else if(section.classList.contains('section-dark')){
//         section.classList.remove('section-dark')
//         section.classList.add('section-light')
//     }
    
// console.log("clicked")
// })

const fulldarkcolor= document.getElementById('full-dark-mode')
const  containedcolorbtn= document.getElementById('contained-dark-mode')
const body = document.body
const containedcolr =document.getElementById("contained")
fulldarkcolor.addEventListener("change",(e)=>{
  if(fulldarkcolor.checked){
    body.classList.add("dark")
  }else{
    body.classList.remove('dark')
  }


})
containedcolorbtn.addEventListener("change",()=>{
    if(containedcolorbtn.checked){
        containedcolr.classList.add('dark')
    }else{
        containedcolr.classList.remove('dark')
    }
})