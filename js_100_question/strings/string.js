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


// !!!! ASYNCRONUS NATURE OF JS ==================================================>
// **setTimeout 
    // console.log(2)

    // setTimeout(() => {
    //     console.log(5)
    // }, 3000);

    // console.log(33)

// *setTimeout 
    // console.log(2)

    // setInterval(() => {
    //     console.log(5)
    // }, 1000);

    // console.log(33)

    // ** clearIntervall

    // let count =1;
    // const itnervafunction = setInterval(() => {
    //     if(count==10){
    //         clearInterval(itnervafunction)
    //         console.log("now the code is over ")
    //     }

    //     console.log(count)
    //     count = count+1;
      

    // }, 1000);
   

    // !!!! PROMISSES IN JS ==========================================================>
// *promisses are used to handle the error of async code 









    // !!! all about fetch ===============================>

//  fetch ("https://jsonplaceholder.typicode.com/posts")
//         .then((data)=>data.json())
//         .then((res)=>console.log(res))
//         .catch((err)=> console.log(err))



//  !!!! ALL ABOUT ASYNC AWAIT ===================================>
let container = document.getElementById("container")
let loader = document.getElementById("loader");
async function getPost(){
    try{

        loader.classList.remove("hidden");
        const stringData = await fetch("https://jsonplaceholder.typicode.com/posts")
        const jsonData = await stringData.json()
        console.log(jsonData)
        loader.classList.add("hidden");
        jsonData.forEach(element => {
            let titlename = document.createElement("h3")
            let paraname = document.createElement("p")
            titlename.innerHTML=element.title;
            paraname.innerHTML=element.body;
            container.appendChild(titlename)
            container.appendChild(paraname)


        });
       

    }catch(erro){
        console.log(erro)
        loader.classList.add("hidden");
    }
}
getPost()