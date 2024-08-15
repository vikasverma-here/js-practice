

// write a function named greet that takes a nae as an arguments and returns a greeting massage
// function greet (vikas){
//     return console.log('greeting massage');
// }
// greet()


// conver function declarationinto a function expression

// declaration 

// console.log(  add(4,5)) you can call before declaration as well 

// function add (a,b){
//     return a+b;
// }

// you can call function after declaration like this-

// console.log(  add(4,5)) but

// function expression 

// console.log(add(3,4))
// this not allowed in expression

// const add = function(a,b){
//     return a+b;
// }

// we can call here only 
// console.log(add(3,4))


// function multiply (a,b ){
//     return a*b;
// }

// converted in arrow function

// const multiply = (a,b)=>{
//    return a*b;
// }
// console.log(multiply(3,5))



// create a function sayhello that has a default  parameter for the name so if no name provided it returns helow stranger 

// function sayhellow (defaultName="hellow,Starnger"){
//      return defaultName;
// }


// console.log(sayhellow('vikas'))
// console.log(sayhellow('hey'))
// console.log(sayhellow())
// console.log(sayhellow())

// write a function sumall that accepts any number of arguments and returns their sum using  rest parameter 

// function sumAll (...args){
//     return args.reduce((acc,curr)=>{
       
//         return  acc=acc+curr;
//     },0)
// }

// console.log(sumAll(4,5,6,5,6,7,4,6,6,5,5,66))

// write a function iseven that checks if a number is even and returns true or false 

// function check (num){
//     return num%2==0 ? true : false
// }
// console.log(check(4))

// create an anonymous function that takes two number s and returns their diffrence  immediately invoke the function 

//   create an anonymous funciton that takes two number and returns their diffrence immediately invookethe function 

// const subTract = function(a,b){
//     return a-b;
// }
// console.log(subTract(5,7))

// write a function that takes another function as an arguments and invokes it 

// function invoke (fn){
//     if(fn === "function"){
//         fn()
//     }else{
//         console.log('the value is wrong ')
//     }


// }
// function say (){
//     console.log('invoked')
// }

// invoke(say)

// function main(callback){
//     console.log('this this the mainfunction')
//     callback()
// }
// // hey is a call back function 
// function hey(){
//     console.log("this is callback ")

// }
// // main is the heigher order function/ 
// main(hey)

// function sum (another){
//     another()

// }
//  function another(){
//    console.log('helolow')
//  }

// sum(hey)

// function heigherorder(callback){
//     console.log('heigher order function')
//    callback ()
// }
// heigherorder(()=>{
//     console.log("this the call back function")
// })

// function takesFunction(calling){
//     console.log("function that takes an input as a function")
//     calling()

// }
// const lests = function(){
//     console.log("here is loading something")
// }
// takesFunction(lests)

// function  invoking(fn){
// if(fn==='function'){
//     console.log('are u talking to function')
    
//     fn()
// }else{
//     console.log("not a function man")
// }
// }


// invoking(()=>{
//     console.log("hellow")
// })

// function calculate (add,sub,div,mul){
// console.log(add(4,5))
// console.log(sub(4,5))
// console.log(div(4,5))
// console.log(mul(4,5))
// }

// function addition (a,b){
// return a+b;
// }
// function subtraction (a,b){
// return a-b;
// }
// function divide (a,b){
// return a%b;
// }
// function multiply (a,b){
// return a*b;
// }

// calculate(addition,subtraction,divide,multiply)

// create a object  with a method that logs a massage to the console when called 

// function x(){
//     x.age = 20;
//     x.name="vikas"
//     x.address="lucknow "
//     x.mobileNo=8849394349;
// }


// console.log(x.age)

// this is the default binding 
// const  showThis = ( )=> {
//     console.log(this);
// }

// showThis(); // In a browser, this will log the `window` object


// this is the implicit binding 

// const person ={
//     name:"vikass ",
//     age:44,
//     check :function (){
//         console.log(this)
//     }
// }

// console.log(person.check())

// function partial(fn, ...partialArgs) {
//     return function(...args) {
//         // Combine the partial arguments with the new arguments
//         return fn(...partialArgs, ...args);
//     };
// }

// // Example usage:

// function greet(greeting, name) {
//     return `${greeting}, ${name}`;
// }

// // Create a partially applied function
// const greetHello = partial(greet, 'Hello');

// // Call the partially applied function with the remaining argument
// console.log(greetHello('Vikas')); // Output: Hello, Vikas!


//  console.log(btn)

