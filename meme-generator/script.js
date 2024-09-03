const button =document.getElementById('btn')
const url = "https://meme-api.com/gimme/wholesomememes";
const contnent = document.getElementById('title')
const meme = document.getElementById('meme')
const author = document.getElementById("author")

button.addEventListener('click',()=>{
    fetchData()
})


 async function fetchData (){
    const respons  = await fetch(url)
    const data = await respons.json()
   contnent.innerHTML = data.title;
   meme.src = data.url
   author.innerHTML= "Made By :"+ data.author
    console.log(data)
}

fetchData()