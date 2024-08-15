const plusBtn=document.querySelector('.plus')
const minusBtn=document.querySelector('.minus')
const content = document.querySelector('h1')
const input = document.querySelector('input')

const reset = document.getElementById('resetBtn')

const letsShow = document.getElementById('out')

plusBtn.addEventListener('click',()=>{
const value = parseInt( content.innerHTML) 
const mainval =  parseInt(input.value) 
content.innerText=value+mainval;


})


minusBtn.addEventListener('click',()=>{

   const minusVal = content.innerText;

   if(minusVal>0){
    const input = document.querySelector('input')

    let minusNUM = input.value;
    content.innerHTML= minusVal-minusNUM
    
   }


})

reset.addEventListener("click",()=>{
    content.innerHTML="0";
})


