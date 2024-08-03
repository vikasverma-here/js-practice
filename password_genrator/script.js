const passwordBox = document.getElementById('password')
const lenght =12;



const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const symbols='!@#$%^&*()_+~`|}{[]\:;?><,./-='
const number = "0123456789"

const allchar = uppercase+lowercase+number+symbols;

function createPassword(){
    let password ="";
    password+=uppercase[Math.floor(Math.random()* uppercase.length)];
    password+=lowercase[Math.floor(Math.random()* lowercase.length)];
    password+=symbols[Math.floor(Math.random()* symbols.length)];
    password+=number[Math.floor(Math.random()* number.length)];
    
  while(lenght>password.length){
    password+=allchar[Math.floor(Math.random()* allchar.length)];
  }
  passwordBox.value=password

}

// this  function copy the entire password 


function copy(){
    passwordBox. select()
    document.execCommand('copy')
}

