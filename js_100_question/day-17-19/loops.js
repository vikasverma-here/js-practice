
//!!! 40- Print hello until user gives wrong input using do while==================================>

// let value ;
// do {
//     console.log("hellow");
//      value = prompt("enter the value 'yess ' to stop printing hellow ")
// } while (value != 'yess');


// !!!Make a choice based calculator using do while===============================================================>
// let choice;
//     do {
        
//         choice = prompt(
//             " choose an operation :\n"+
//             "1. for Addition:\n"+
//             "2. for subtraction:\n"+
//             "3. for multiply:\n"+
//             "4. for devide:\n"+
//             "5. exit from calculator:\n"
//         );
//         if(choice>=1 && choice<=4){
//             let num1= parseFloat(prompt("enter the num 1"))
//             let num2= parseFloat(prompt("enter the num 2"))
//             let result;
//          switch ( parseInt(choice)){
//             case 1:
//                 result=  num1+num2;
//             alert(`addition is ${result}`)
//             break;
//             case 2:
//                 result = num1-num2;
//                 alert(`subtraction is  ${result}`)
//                 break;
//             case 3:
//                 result =num1*num2;
//                 alert (`multiply is ${result}`)
//                 break;
//             case 4:
//                 if(num2<=0){
//                     alert(`zero and less than zero are valid to divide `)
//                 }else{
//                     result = num1/num2;
//                     alert(`division of num1 and num2 ${result}`)
//                 }
//                 break;
             

//          }

//         }
//         else if (choice == 5) {
//             alert("Exiting the calculator.");
//         } else {
//             alert("Invalid choice, please select a valid option.");
//         }

//     } while (choice !=5);


// !!!Accept an english alphabet from user and check if it is a consonent or a vowel;==============================>

  
//   *  let char = prompt("Enter a character to check if it is a vowel or consonant").toLowerCase();  

// switch (char) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         alert(`${char} is a vowel`);
//         break;

//     default:
//         alert(`${char} is a consonant`);
//         break;
// }


// let randomnum =  Math.floor( Math.random()*100)
// console.log(typeof(randomnum))

// let input=+prompt("enter the number")
// while(randomnum !==input){
    
//     if(input>randomnum){
//         alert("number is two low ")
//     }else if ( input<randomnum){
//         alert("number is two high ")
//     }
//     input=+prompt("enter the number again ")
// }


// alert ("number is creect ")



// let randomnum = Math.floor(Math.random() * 100);
// console.log(randomnum);  

// let input = +prompt("Enter the number");

// while (randomnum !== input) {
//     if (input > randomnum) {
//         alert("The number is too high");
//     } else if (input < randomnum) {
//         alert("The number is too low");
//     }
    
   
//     input = +prompt("Enter the number again");
// }


// alert("Your guess is correct!");


// !!!! LETS SOLVE SOME PATTERN QUESTION IN JS  =================================================================================>
// *
// * *
// * * *
// * * * *
// * * * * *

// sollution 


// for (let row=1; row<6;row++){
//   let   pattern= '';
//     for(let col=1; col<=row;col++ ){
//        pattern = pattern+'*'
//     }
//     console.log(pattern)
// }


// method two ----------------------------------------------------------------->

// for(let i=0;i<=6;i++){
//     console.log("*".repeat(i))
// }

// method three---------------------------------------------------------------->
// function printFunction(row){
//     for(let i=1;i<=row; i++){
//         console.log("*".repeat(i))
//     }
// }
// printFunction(5)
// console.log("=================================================>")
// printFunction(3)
// console.log("=================================================>")
// printFunction(7)


//! ==============================================================!!==================================>
    // function printRownum(triangle){
    //     for(let i=1;i<=triangle;i++){
    //         let rownum="  ";
    //         for(j=1;j<=i;j++){
    //           rownum=rownum+j+" ";
    //         }
    //         console.log(rownum)
    //     }
    // }

    // printRownum(10 )


//    ! 48- Right Triangle - Alphabet  ===========================================================================>
	// A
	// A B
	// A B C
	// A B C D
	// A B C D E

    function printAlphabet(alpha){
        for(let i=1;i<=alpha;i++){
            let char= 'A';
            for(let j=1;j<=alpha;j++){
                char = char+j+" ";
            }
            console.log(char)
        }
    }
printAlphabet(4)