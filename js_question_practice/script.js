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