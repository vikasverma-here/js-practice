const text = document.getElementById('input-text')

const button = document.getElementById('btn')




async function fetchData (){
     
     const response = await fetch(`https://api.agify.io/?name=${text.value}`)
     const data = await response.json()
     console.log(data)
     document.getElementById('name').innerHTML=`${data.name}`
     document.getElementById('age').innerHTML=`${data.age}`
}

// fetchData()

 const btn= button.addEventListener('click',fetchData)