
const button = document.getElementById('btn')
button.addEventListener('click',bmiCalculater)

function bmiCalculater(){

const height =parseFloat(document.getElementById('height').value) 
const weight = parseFloat( document.getElementById('weight').value)
const result = document.getElementById("result")
const heightInMeters = height / 100; 
  const findedbmi= (weight / (heightInMeters * heightInMeters)).toFixed();
  let acrualBmi= result.innerHTML=findedbmi;

  if(acrualBmi<=18.4){
    result.innerHTML= findedbmi +" underweight"
  }
  else if(acrualBmi>=18.5 &&  acrualBmi<=24.9){
    result.innerHTML= findedbmi+ " normal"
  }
  else if(acrualBmi>=25.0 && acrualBmi<= 39.9){
    result.innerHTML= findedbmi+ " overwieght"
  }
  else  {
    result.innerHTML= findedbmi+ " obese"
  }
}

