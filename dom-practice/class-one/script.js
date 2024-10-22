// !! Document == "document is the pre defined objesct given bythe js which holds the connected html file (index.jtml)"
// **there are many types of selector in js 
// id - document.getElementById()
// class-document.getElementsByClassName()
// tag-document.getElementsByTagName()
// quesryseltor() to select the first /single element 
// quesryseltor() to select the multyple element

// !!start practice ===================================================>


    // const heading = document.querySelector("h1")
    // console.log(heading.innerHTML)
    // heading.innerHTML = "Good byyy "
    // heading.style.backgroundColor='red'
    // heading.remove()
    

    // console.log(heading.innerHTML)
    // console.log(heading.textContent)
    // console.log(heading.innerText)

    // !!!! CLASS TWO ===============================================.> 

    // const heading = document.querySelector("h1")
    // const btn = document.querySelector('button')
    
    // btn.addEventListener("click",()=>{
    //     heading.innerHTML=" <strike> hellow world </strike> "
    //     heading.style.backgroundColor='green'
    //     heading.style.color='red'
    // })


    // ?? create a card  with html and css and add a button which shows follow and the heading which 


    let profle = document.querySelector('h1')
    let btn = document.querySelector('button')
    btn.addEventListener("click",()=>{
        if(profle.innerHTML=='Stranger'){
            profle.innerHTML='Frends '
            profle.style.backgroundColor='green '
            profle.style.color='red'
            btn.innerHTML="unfollow"
             btn.style.backgroundColor='black'
        btn.style.color='white'
        }else{
             profle.innerHTML='strnage '
            profle.style.backgroundColor='yellow'
            profle.style.color='black'
            btn.innerHTML="follow"
             btn.style.backgroundColor='black'
        btn.style.color='white'
        }
       
       
    })