const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const box4 = document.getElementById('box4')
const box5 = document.getElementById('box5')
const box6 = document.getElementById('box6')
const box7 = document.getElementById('box7')
const box8 = document.getElementById('box8')
const box9 = document.getElementById('box9')

const btn = document.getElementById('btn')
btn.addEventListener('click',()=>{
    const input = document.getElementById('input').value;
   
    const p1= box1.innerHTML;
    const p2= box2.innerHTML;
    const p3= box3.innerHTML;
    const p4= box4.innerHTML;
    const p5= box5.innerHTML;
    const p6= box6.innerHTML;
    const p7= box7.innerHTML;
    const p8= box8.innerHTML;
    const p9= box9.innerHTML;
    if(input == p1){
        box1.style.backgroundColor="green"
    }
   else if (input == p3){
    box3.style.backgroundColor="green"
   }
   else if (input == p4){
    box4.style.backgroundColor="green"
   }
   else if (input == p5){
    box5.style.backgroundColor="green"
   }
   else if (input == p6){
    box6.style.backgroundColor="green"
   }
   else if (input == p7){
    box7.style.backgroundColor="green"
   }
   else if (input == p8){
    box8.style.backgroundColor="green"
   }
   else if (input == p9){
    box9.style.backgroundColor="green"
   }
  
})