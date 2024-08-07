const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.addEventListener('click',()=> {
   if(password.type === 'password'){
    password.type = "text"
    togglePassword.src='on.png'

   }

   else{
    password.type = 'password'
    togglePassword.src='off.png'
   }
})