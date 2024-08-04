const content = document.getElementById('content')
const author = document.getElementById('quote')
const button = document.getElementById('btn')
const button2 = document.getElementById('btn2')
async function accessData(par) {
    const url = await fetch('https://type.fit/api/quotes')
    const data = await url.json()
    console.log(data)

     content.innerHTML=`${data[par].text}`
     author.innerHTML=`${data[par].author}`

}

button.addEventListener("click", ()=> {
    accessData(Math.floor(Math.random()*10+1))
})

button2.addEventListener('click', ()=> {

        content. select()
        document.execCommand('copy')
    
})