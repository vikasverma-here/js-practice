// q-1 = write a function that takes two numbers and returns their sum 

// function sum (a,b){
//     return a+b;
// }
// console.log(sum(2,5))

// q-2 = create a function that checks if a number is even or odd 

// function evenOdd (num){
// if(num % 2==0){
//     console.log("value is even ")
    
// }else{
//     console.log("value is odd")
// }
// }

// console.log(evenOdd(57))

// q-3 = write a function that returns the factorial of a number 



// function factorialIterative(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(factorialIterative(6))

// q-4 = implement a function that reverse a string 

// function reverseStr(str){
//     const cheack = str.split('').reverse('').join('')
//     console.log(cheack

//     )
// }
// console.log()
// reverseStr('vikas')

// UNDERSTAND THE IN THE MORNING

// Q-5 = write a function to find the largest number in array 



//  function  findlargestNumber  (arr){

//     if (arr.lenght===0) {
// return undefined;

//     }
// let largest = arr[0]
// for ( let i = 1; i< arr.lenght ; i++){
//     if (arr[i]>largest){

//         largest = arr[i]
//     }
// }
// return largest;

//  }
//  const number  = [3,2,5,3,45,4,,34,6,48,43,]
//    const store = findlargestNumber(number)
//    console.log(store)

// const numbers = [3, 7, 2, 8, 5, 10, 1];

// let largestNumber = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > largestNumber) {
//     largestNumber = numbers[i];
//   }
// }

// console.log(`The largest number is: ${largestNumber}`);


// trimm awhite spce from an string 

// const string = "   hellow wrold    "
// console.log(string)
// const applytimethod = string.trim();
// console.log(applytimethod)

// const string = "hellowdear"
// const subStr = ''
// if(string.indexOf(subStr)!== -1){
//     console.log("yess this sstring start with a substring")
// }else{
//     console.log("not start with a substring")
// }

// const string = 'hellow , w'
// const str = 'w'

// if (string.endsWith(str)){
//     console.log(true)
// }else {
//     console.log(false)
// }

// const str = "vkas".repeat(10);
// console.log(str)

    // const string = 'vikasverma '
    // const converted = string.split('')

    // console.log(converted)

    // const string = 'vikasverma'
    // const convert = string.split('')
    // console.log(convert)
    // const reverse = convert.reverse().join("")
   
    // console.log(reverse)

//    function palindrom(str){
//     let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     const reever = str.split('').reverse().join('')
//     return str === reever
//    }
// console.log(palindrom('hellow'))

// function vowel (str){

  

//     let vowel = ['a','i','o','u','e']
//     let count = 0;
//      str.split().map((val,i)=>{
//         if (val === vowel[vowel.i]){
//             count=count +1;
//         }
//     })
// console.log(count)
// }

// console.log(vowel('vikas'))

// const arr = [1,2,3,4,5,6,]
// const reverse = arr.reverse()
// console.log(reverse)
// const arr = [1,2,3,4,5,6]
// console.log(arr.length-1)

// const str = 'vikas '
// const split = str.split('')
// console.log(split)
// let sum =0;
// for (let i = 0;i<split.length;i++){
//     if(split[i].includes('a','i','o','u')){
//        sum=sum+i;
       
//     }
    
// }
// console.log(sum)

// function countval(str){
//     str = str.toLowercase()
//     const vowels =['a','i','o','u','e']
//     let count = 0;
//     for(let i =0; i<str.length;i++){
//         if(vowels.includes(str[i])){
//             count++
//         }
//     }
//     return count;
// }

// console.log(countval('vikas'))

// function countVowels(str) {
//     str = str.toLowerCase();
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
  
//     for (let i = 0; i < str.length; i++) {
//       if (vowels.includes(str[i])) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   console.log(countVowels('shivamverma')) 

// Iteratiove statement/loops 
// Entry control loop
// Exit Control 

// Entry control loop are two type 
// 1-for loop 
// 2-while loop 

// Exit control loop is one type 
// 1-Do whiel loop 

// while loop 
// 1-Loop variable
// 2-condition updation
// 3-body Loop
// 4- updation expresion

// syntax 

// let i = 1;
// while(i<=20){
//     console.log(i)
//     i++;
// }

// Do while loop 
 
// let i = 1;
// do{
//     console.log(i)
//     i++;
// }while(i<=19)

//     console.log("loop end")

// 3- for loop 

// for(let i =0; i<=10 ; i++){
//     console.log(i)
// }

// BREAK AND CONTINUE 

// 1-CONTINUE STATEMENT 

// for (let i=0; i<=20 ;  i++){
//     if(i%2 !=0){
//         continue; go to updation expression skip the below code
//     }
//     console.log(i)
// }

// 2- BREAK STATEMENT 

// for(let i =1 ; i<=10; i++){
//     if(i==6){
//         console.log("loop is break ");
//         break;
//     }
//     console.log(i)
// }

// question 1= sum of two number


// let num=  +prompt ("number")
// let num2= + prompt ("number")
// let sum = num+num2;
// console.log(sum)
 
// WAP  a program to swap two number  

// let a = 7;
// let b= 3;
// console.log("before swapping")
// console.log(a , "a")
// console.log(b , "b")
// let temp = a;
//  a = b;
//  b = temp;
//  console.log( "after swapping")
//  console.log(a , "a")
//  console.log(b , "b")

// without  using third  variable 
// let a = 7;
// let b= 3;
// console .log ("before withusing third variable  a :" ,a)
// console .log ("before withoutusing third variable  b :" ,b)
// a = a+b;
// b=a-b;
// a=a-b;
// console .log ("after withoutusing third variable  a : " ,a)
// console .log ("after withoutusing third variable   b :" ,b)



// let length = +prompt("lenght")
// let width = +prompt("width")
// let area = length*width;
// console.log( "Area is  ",area)
// let parameter = 2*(length+width)
// console.log ("parameter is " ,parameter)


// WAP for Simple interest 

// let p = +prompt("P")
// let r = +prompt("r")
// let t = +prompt("t")
// let answer = (p*r*t/100)
// console.log (answer)


// accept the 3 sides of the triangle and find the area with herons formula 

// let a = +prompt("enter the length of a ")
// let b = +prompt("enter the length of b ")
// let c = +prompt("enter the length of c")
// let s = (a+b+c)/2;
// let area = (s*(s-a)*(s-b)*(s-c))**0.5;  Math.sqrt() gives us suare root of element and .tofix(2) this method gives us two number after point 
// console.log(area)

// find the circumference of the sphere

// let a = +prompt("radius")

// let areaOFsphere= 4*3.14*(a*a);
// console.log(areaOFsphere)

// find the area and parameter of circle

// let radius = +prompt("radius")
// let area = 3.14*(radius*radius)
// let parameter = 2*3.14*radius;  we have Math.PI() that gives us a jvalue of pi
// console.log(" Area of circle is  " , area)
// console.log( "parameter of circle is ", parameter)


