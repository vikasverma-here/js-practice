// !! 23- Accept an integer and Print hello world n times =====================================================>
    
    // let number  = +prompt("enter a number to print hellow number of times ")
    // for(let i=1; i<=number; i++ ){
    //     console.log("hellow")
    // }


// !!! Print natural number up to n.  ===============================================================================>
    // let n = +prompt("enter number to all natural number between one to n ")
    // for(let i=1; i<=n; i++){
    //     console.log(i)
    // }

// !! 25- Reverse for loop. Print n to 1.========================================================>
    // let n = +prompt("enter the number to print reverse of the number between n to 1 ")
    // for(let i=n ; i>=1; i--){
    //     console.log(i)
    // }

// !! 26- Take a number as input and print its table ==================================================>
    // let number = +prompt("enter the number for table ")
    // for(let i=1; i<=10; i++){
    //     console.log(number ,'* ' ,i ,'= ',number*i )
    // }

// !! 27- Sum up to n terms. =====>
    // let n = +prompt("enter the number for sum up to n terms ")
    // let sum = 0;
    // for(let i=1; i<=n; i++){
    //     sum = sum+i;
    // }
    // console.log(sum)


// !!! 28- Factorial of a number =============================================================>
    // let number = +prompt("enter a number to get factorial for that ")
    // let fact = 1;
    // for (let i=1; i<=number ; i++){
    //     fact = fact*i;
    // }
    //  console.log(number,"factorial is :" , fact)


// !!!! 29- Print the sum of all even & odd numbers in a range seperately. ======>
//    let start = +prompt("enter starting number ")
// let sumForEven = 0;
// let sumForOdd = 0;
//    let last = +prompt("enter last number ")
//    for(let i=start;i<=last;i++){
//     if(i%2==0){
//         sumForEven=sumForEven+i;
//         console.log( "even number :", i)

//     }
// else if (i%2 !=0){
//        sumForOdd =sumForOdd+i;
//         console.log("odd number is :" ,i)
//     }
//    }

//    console.log("Sum of even number :" ,sumForEven)
//    console.log("Sum of odd number :" ,sumForOdd)


// !!! 30- Print all the factors of a number. ===========================================================>
    // let number = +prompt("enter the number ")
    // for (let i=1; i<=number ; i++){
    //     if(number%i==0 ){
    //         console.log( number , "factor " , i)
    //     }
        
    // }


// !!!!!!!    31- Print the sum of all factors of a number, 50 -> 1 + 2 + 5 + 10 + 25 = 43 ===================>

    // let number = +prompt("enter the number ")
    // let factorSum =0;
    //     for (let i=1; i<=number ; i++){
    //     if(number%i==0 ){
    //         factorSum  = factorSum+i;
    //         console.log( number , "factor " , i)
    //     }
    //     console.log(factorSum);
        
    // }

// !!!! 32- Check if the number is Prime or not ===========================================================>

// let number = +prompt("enter the number ")
// if (number<2){
//     console.log ("number is not prime ")
    

// }
// for (let i=2;i<number ; i++){
   
//     if(number%i==0){
//         console.log ("number is not prime ");
//        break;

//     }
//     else{
//         console.log("number is prime ")
//         break;
//     }
// }

// !!!!!33- Write a program to take two inputs a, b & find the value of a  raised to the power of b. 
// !Ex - a = 2, b = 5
//! OP - 2^5 = 32 ====================================================================================================================>

    // let num1 = +prompt("enter the number one ")
    // let num2 = +prompt("enter the number two")


    // let pow = Math.pow(num1,num2)
    // console.log(pow)



// !!!34- Seprate each digit of a number and print it on the new line ex - 123  =====================================================>
//     3
//     2
//     1

// let number = +prompt("enter the number ")
// let tostr =number.toString()
// for(let i=tostr.length-1;i>=0; i--){
//     console.log(tostr[i])
// }


// !!35- Sum of digits of a number, 936 = 18 ========================================================================================>
//     let number = +prompt("enter the number ");
// let numStr = number.toString();
// let sum = 0;
// for(let i=0;i<=numStr.length-1;i++){
//     sum = sum+  parseInt(numStr[i]) 
   
// }
// console.log(sum)

// !!!! 36- Accept a number and print its reverse============================================================================>

//     let number = +prompt("enter the number ");
//     let numStr = number.toString()
//     let reverse = " "
//     for(let i=numStr.length-1; i>=0; i--){
// reverse =reverse + numStr[i]

//     }
//     console.log(reverse)
   