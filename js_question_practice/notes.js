// function declaration and function intialization 
// function sum(){
//     let a = +prompt("number a ")
//     let b = +prompt("number b")
//     let sum =a+b;
//     console.log(sum)
// }

// functionk calling
// sum()


// most importent thing in function 

// 1= by default function returns  undefined 
// 2= return must be the last line of the function 
// 3=only single entity must  be returned by the function 
// 4= function call is replaced by the rreturn value 
// 5= code written after return in the function will not be reachable 

// property number one ====== =====================  this returns deault undefined
// function returnig (){
//     console.log("hellow mere")
//     }
    
//     console.log(returnig())



// PROPERTY NUMBER TWO =========================// 2= return must be the last line of the function 

// function returnig (){
//     console.log ("ka ho raja ji ")
//     return 5;
//     console.log ("this is second line  ")
//     console.log ("thrid line  ")
//     }
    
//     console.log(returnig())



// PROPERTY NUMBER THREE ================================// 3=only single entity must  be returned by the function 

// function returning(){
//     console.log ("ka ho raja ji ")
//     return "vikas " , "suneel";
 
//    }
// only suneel print hoga 
//    console.log(  returning())
 
// PROPERTY FOUR ============================== // 4= function call is replaced by the rreturn value 





// types of function  ====================================>
 
// function ke andear hum log isliye console ki jagah return laagate hai taki hum log function ke andar ke data ko function ke bahar use kar paye  agr jarurat hai data bahar use karnee ki agr nahi hai to console se bhi kam chal jayega 


// FUNCTION AND METHOD ===========================================================>
// FUNCTION-> not compulsory to return anything 
// METHOD(object)  -> compulsory to return something 



// =============================================================>
// function getname (){
// console.log("hellow")
// }
// getname()  nonparamaterized function
// js function like Math.sqrt(4) this is parametrized function 
// jo parameter recive kare our argument le o function parametrized function hote hai our ja na le o non paramaterized function hote hai 


// ==================================================================================>
    // function ke call ke time jo value leta hai use argument bolte hai 
    // function me jo argument recive kare us variable parameter bolte hai 

    // example 
    // function getname (name,city ){
    //     console.log(name,city)

    // }
    // let n = "john due"
    // let c = "bhopal"

    // getname(n,c)



// ==============================================================================================================>
    // USE OF RETURN EXAMPLE 
// function getsum(a,b){
//    let  sum = a+b;
//     return sum;

// }
// ab humko 5 se multiply karna hai without return hum sum ki value bahr nhai nikal sakte the 
// let sum = getsum(2,4)
// let value = 5;

// console.log(value*sum)





// ==========================================================================================================================>
    // functionality of parametrized and non parametraized function --------->
//    DEFAULT PARAMETER 
// RULES --------------------------->
// 1-Default Parameter must be the the last parameter of the function 
// 2-there should only 1 default pakrameter in the function 

// function survey (name , bathch = "MERN12"){
//     console.log(name,bathch)
// }
// survey("vikas ")
// survey("vikas ","B24")
// survey("vikas ")
// survey("vikas ")
// survey("vikas ","3435343")
// survey("vikas ")




// ===============================================================================================================>
//  REST  PARAMETER -------------->
// RULES--------->
// 1-rest operator must be the last parameter in the function 
// 2-there must be oonly one rest parameter in the function 

// function hobies (name,...h){
//     console.log(name ,h)
// }
// hobies("john","swimming")
// hobies("john","swimming","dancing ")
// hobies("john","swimming")
// hobies("john","swimming" ,"reading ", "writting ")
// hobies("john","swimming","sleeping")
// hobies("john","swimming")
// hobies("john","swimming","traveling")




// ================================================================================================================>
    // FAT ARRAOW FUNCTION ------------->

// const greet = ()=> {

// }

// nonparametrized function fat arraow function 
// const greet = ()=>"hellow "
// let res = greet()
// isme return na likho tab bhi kam chal jata hai 

// parametrized function fat arrowffunction 
// const sum = (a,b)=>a+b;
// const res = sum(2,3)
// console.log(res)

// !!!!!!!!!!!!!!!!!!! DIFFRENCE BETWEEN NORMAL FUNCTION AND FAT ARRAOW FUNCTION --------------------------------------->

//  !!!!!  points----------->
// 1. No arguments object in arrow functions
// 2. Arrow functions do not create their own this binding
// 3. Arrow functions cannot be used as constructors
// 4. Arrow functions cannot be declared
// 5 Arrow functions cannot be accessed before initialization
// explnation given below 
// !!!!! RETURN VALUE NORMAL FUNCTION  ------->
// function multiply(num1, num2) {
//     const result = num1 * num2
//     return result
//   }
//   iseme hum bina console ya return ke operation perform nahi kar sakte hai 


// !!!!!!!! FAT ARROW FUNCTION ------------->

//   const multiply = (num1, num2) => num1 * num2

//    isme hum bina return our cosole ke likhe bina operation perform kar sakte hai 





// !!!!!!! NORMAL FUNCTION KE PASS ARGUMENT  ARRAY LIKE OBJECT HOTA LIKIN KEWAL INDEXING ARRAY JAISI HOTI PAR ARRAY KE METHOD LIKE PUSH()Pop() Statement nahit hote  NAHI HOTA --------------------------->

// function print() {
//     console.log(arguments[2])
//     console.log(arguments)
//   }
//   print('hellow ',300,true) passing object values in function

// !!!ARROW FUNCTION ME AISA KUCH ARGUEMENT TYPE KA NAHI HOTA -------------------------------------------->
// dekho lo aise hi hota hai arraow function me jo uper hai waisa hi 


// !!!!!!! NORMAL FUNCTION KO HUM EK OBJECT KE ANDAR VALYE ME PASS ME KARKAR THIS KA USE KARKE O SARI VALUE KO ACCES KAR SAKTE BY USING THERE KEY NAME WITH THIS . BUT IN ARROW FUCNTION WE CAN NOT ACCESS OBJ VALUES DIRECTLY USING THIS ----------------------------------->>>

// const obj = {
//     name: 'deeecode',
//     age: 200,
//     city :"jfjdskf",
//     nametwo: "vabhai",
  
//     print: function() {
    
//       console.log(this.name)
//       console.log(this.city)
//       console.log(this.age)
//       console.log(this.nametwo)
//     }
//   }
  
//   obj.print()



// !!!!!!!!!!!!!!!! HOW TO USE THIS IN ARROW FUNCTION --------------------------------------------------->
// const obj = {
//     name: 'deeecode',
//     age: 200,
//     print: () => {
//       console.log(this)
//     }
//   }
  
//   obj.print()
//   !!!! Window AYEGA CONSOLE ME DIRECRTLY USE KARNE SE 

// const obj = {
//     name: 'deeecode ',
//     age:2000,
//     print:function(){
//         const noname = ()=>{
//             console.log(this )  !!!now arraow function works
//         }
//         noname()
//     }
// }
// obj.print()



// !!!!!!!! FUNCTION EXPRESSSION  JIS FUNCTION KA NAM NA HO OUR WO KISI VARIABLE ME STORE HO USE HI FUNCTION EXPRESSION BOLTE HAI ------>
// const printHello = function() {
//     console.log("hello")
//   }


// !!!!!!!! ARROW FUCNTION CAN NOT TO BE ACCESSED BEFORE INITILIZATION ------------->

//!!! ----->NORMAL FUNCTIOMN``
// printName()

// console.log("hello")

// function printName() {
//   console.log("i am dillion")
// }
// YE TRUE HAI 

// !!------>ARROW FUNCTION 
// printName()

// console.log("hello")

// const printName = () => {
//   console.log("i am dillion")
// }

// ReferenceError: Cannot access 'printName' before initialization

// !!!! declaretion and initialization 
// var a ; declaretion 
// a=10 intitliazation
// compiler by default undefined value dal deta hai variable me  agr variable initialization

// !!TEMPORAL DEAD JON ------->  Imporatant 

// console.log (a)
// let a= 3;

// jab let  ya const  se variable declare  karte hai to compiler default me undefined value nahi dal pata jisse hume erro milta hia variable can not use before initialization our isi ke bich ke fase ko bolte hai temoraldead jon 

// !!! function are fully hoisting------>/ 
// old functtion jo ki function key word se likh se likh jata hai o fully hoisted hote hai junko hum bina banaye use kar sakte hai 
// example --->

// sum(4,5)
// function summ (a,b){
//     return a+b;
// }

// var = partialy hoisted 
// let,const = temporal dead zone 
// fnction = fully hoisted 

// !!!! Arrow function are not fully hoisted qki ye ek anonymous function hai joki const variable me store hota hai joki temporal dead zone hai 

// const add = (a,b)=>{
//     return a+b;
// }

// !!!!! primetive datatype --->  immutable
// immutable and prmitive and non primitive  (aisi value jinko change na kiya ja sake )
// let a= 12;
// let b= 13;
// b=a;
// b=14;
// console.log(a)
// console.log(b)

// !!!! non primitve datatype -----> mutiable 


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!OBJECT IN JS ------------------------------------>

// const userProfile = {
//     name: "John Doe",
//     age: 28,
//     email: "john.doe@example.com",
//     friends: [
//       {
//         name1: "Jane Smith",
//         age: 26,
//         email1: "jane.smith@example.com",
//         greet: function () {
//           console.log(`Hi, I'm ${this.name}`);
//         }
//       },
//       {
//         name2: "Michael Johnson",
//         age2: 30,
//         email2: "michael.j@example.com",
//         greet: function () {
//           console.log(`Hey, I'm ${this.name}`);
//         }
//       }
//     ]

// }

// const {name,age , email } = userProfile
// const {name1, email1,greet}=userProfile.friends
// const {name2,age2,email2 }=userProfile

// console.log(name)
// console.log(name1)
// console.log(age)
// console.log(age2)
// console.log(email)
// console.log(email2)
// console.log(greet)

// *** creating 
// *updating 
//* deleting 
//* reading 
//* traversing 

//* upper is very importent =============================

//!! const userProfile1 = {
//     name: "John Doe",
//     age: 28,
//     email: "john.doe@example.com"
// }

//!! update a property 

// userProfile1.age=43;
// userProfile1.name="vikas";

// console.log(userProfile1.name)
// console.log(userProfile1.age)

//!! add new property 
// userProfile1.city="bhopal";
// userProfile1.country = "india";
// console.log(userProfile1)

// !!!!! delete 

// !!!!! Traversing on object ------->
//  const userProfile1 = {
//     name: "John Doe",
//     age: 28,
//     email: "john.doe@example.com"
// }
// !!* for in val 
// for(let access in userProfile1 ){
//     console.log(access)
// }

// for(let getVal in userProfile1){
//     console.log(getVal ,"=>", userProfile1[getVal] )
// }

// !!!!copying an object-----> 

// const userProfile1 = {
//         name: "John Doe",
//         age: 28,
//         email: "john.doe@example.com"
//     }
    // const userProfile3 = object.assign({},userProfile1)
    // const userProfile2 = {...userProfile1}
    // console.log(userProfile1)
    // userProfile2.city = "mumbai"
    // console.log(userProfile2)

    // what we can not do 

    // let userProfile3 = userProfile1 
    // console.log(userProfile3)
    // userProfile3.village = "scfu"
    // console.log(userProfile1)

//   !!! THIS KEYWORD ------------------->

// const userProfile ={
//     name : "Alex",
//     getname: function (){
//         console.log(this.name)
//     }
// }
// userProfile.getname()


// console.log("hellow")


// !!! PURE AND IMPURE FUNCTION 

// ** asie function  jo apne iscope se bahar ki value ko bina parameter ke use kre unhe impurefunction bolte hai our hume kabhi bhi impure function nahi use nahi karna chaahiye 

// const userProfile ={
//     name : "Alex",
//     getname: function (){
//         console.log(profile.name) yha ye impure function hai qki yha pe name ki value acces ho rhai hai jo ki scope ke bahr hai 
//     }
// }
// userProfile.getname()


// console.log("hellow")

// !!!!! DIFFRENCE BETWEEN NORMAL FUNCTION AND ARROW FUNCTION ----->

// **normal function by default kuch chije apne parent yani ki browser se leke aata hai jabki arrow function nahi lata isliye arrow function jyada efficient hota hai 

// function greet(){
//     console.log (this.window)
//     console.log (arguments)
//     console.log (globalThis)
//     console.log (this)
// }
// greet()

// console.log("-------------------------------------------------------------")


// ***jabki arrow function in sab ko hold hi nahi karta hai 

// const arrow = ()=>{
//     console.log(this)
//     console.log (arguments)
//     console.log (globalThis)
//     console.log (this)
// }
// arrow()