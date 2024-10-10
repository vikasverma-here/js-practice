
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
