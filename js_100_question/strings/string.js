// !!!!! how do you trim whitespace from the beginning and end of a string 
// let trimming = '  vikas   '
// let hell = "hellow "
// console.log(trimming)
// console.log(hell)
// let trims = trimming.trim()
// console.log(trims)

// !!!! how do you check if a string with a certain substring 
// let inputval = prompt("enter the suibstrig ")
// let text = "Hello world, welcome to the universe.";
// if(text.startsWith(inputval)){
//     console.log("yes this string start with this string ")
// }else{
//     console.log("not this string is strat with this substring ")
// }



// !!!! ERROR HANDLING ================================================================================>

    // ??try catch block is used to handle synchronous ( code which runs line by line ) code errors

    // try{
    //     let a = 23;
    //     console.log(a+b)
    // }catch(error){
    //     // error ek object hai jo ki name and message deta hai seprately 
    //     console.log(error)
    //     console.log(error.name)
    //     console.log(error.message)
    // }  
//    console.log("hellow")

// !!! finaly in error handling 

// try{
//     let a=1;
//     console.log(a+b)
// }catch(error){
//     console.log(error)
// }finally{
//     console.log("ye code to always chalega hi chalega kuch bhi ho jaye ")
// }
// console.log("hellow world ")


// !!! HOW TO GENRATE CUSTOM ERROR 

// try{
//     let a=12;
//     let b = 2;
//     if(a%b==0){
//         throw new TypeError("Even is not allowes")
//     }else{
//         throw new Error("odd is not allowed ")
//     }
// }catch (error){
// if(error.name == "TypeError"){
//     console.log("even value is not allowed ")
//     console.log(error.name)
// }else if(error.name == "Error"){
//     console.log(error.message)
//     console.log("odd value is not allowed ")
// }else{
//     console.log("something went wrong ")
// }
// }