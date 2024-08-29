

function a(){
    let randomNumber =Math.round( Math.random()*100)
    // console.log(randomNumber)
    const inputNum=document.getElementById("input")
    const form = document.querySelector("form")
    const hint = document.getElementById("hints")
    const guesses = document.getElementById("guesses")
    const start_game=document.getElementById("start-game")
    const submit=document.getElementById("submit")
    
    const allguesses =[];
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const value = parseInt( inputNum.value);
        if(value <randomNumber){
        
        
        hint.innerText="two low"
           
        }
        else if(value>randomNumber){
           
            hint.innerText="two High"
        }else{
            
            hint.innerText="congrates"
             submit.disabled=true;
            start_game.disabled=false;
            
        }
        allguesses.push(value)
        guesses.innerText="Your guesses : "+allguesses.join(',')
        // console.log("submitted")
        form.reset()
    })
    
    start_game.addEventListener("click",()=>{
     hint.innerText=""
        submit.disabled=false;
        start_game.disabled=true;
        guesses.innerText=""
        randomNumber =Math.round( Math.random()*100)
        console.log(randomNumber)
    })
}


a()