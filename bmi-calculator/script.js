const height = document.getElementById("height")
const weight = document.getElementById("weight")
const result = document.getElementById('result')
const button = document.getElementById('btn')
const form = document.getElementById('bmiForm');

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
  console.log(height)
})



