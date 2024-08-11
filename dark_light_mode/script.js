const toggle = document.getElementById('mode-toggle')
const body = document.body;
 const image= document.getElementById('image')

toggle.addEventListener('click',()=>{
    if(body.classList.contains('light-mode')){
        body.classList.remove('light-mode')
        body.classList.add('dark-mode')

        toggle.innerHTML="Light mode"
    

    
    } 
    else{
        body.classList.remove('dark-mode')
        body.classList.add('light-mode')
       
       
    }
})

// image.addEventListener('click',()=>{
//     if(body.classList.contains('light-mode' && image.src.includes('34_-_Light_Dark_Mode-1024.webp'))){
//         body.classList.remove('light-mode')
//         body.classList.add('dark-mode')

//         // toggle.innerHTML="Light mode"
        
//     image.src='Dark-mode.png'

    
//     } 
//     else{
//         body.classList.remove('dark-mode')
//         body.classList.add('light-mode')
       
       
//     }
// })