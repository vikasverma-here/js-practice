const input = document.getElementById('text')
const generateqr = document.getElementById('generate')
const img= document.getElementById('img')

generateqr.addEventListener('click',()=>{
    
        img.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+input.value
    
   
})