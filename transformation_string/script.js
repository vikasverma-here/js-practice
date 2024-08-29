const inputText= document.getElementById("input-text")
const lower= document.getElementById("lowercase")
const upper= document.getElementById("uppercase")
const camal= document.getElementById("camalcase")
const pascalcase= document.getElementById("pascalcase")
const snakecase= document.getElementById("snakecase")
const kababcase= document.getElementById("kababcase")
const trimcase= document.getElementById("trimcase")





inputText.addEventListener('input',(e)=>{
   // console.log(e.target.value)
   lower.innerHTML=e.target.value.toLowerCase();
   upper.innerHTML=e.target.value.toUpperCase();
   camalfn(e.target.value)
   pascal(e.target.value)
   snake(e.target.value)
   kabab(e.target.value)
   trim(e.target.value)
   // camal.innerHTML=e.target.value.toLowerCase();
})



function capital(str) {
   const first = str[0].toUpperCase();
   const slice = str.slice(1, str.length);
   return first + slice;
}

function camalfn(string) {
   const split = string.toLowerCase().split(" ");
   const camelCased = split.map((val, index) => {
       if (index != 0) {
           return capital(val);
       }
       return val; 
   });

   camal.innerHTML = camelCased.join(""); // Join array into a single string
}

function pascal(pascal){
   const arr=pascal.split(" ");
//    console.log(arr)
  const pascalArr= arr.map((val,index)=>{
      // console.log(val)
      const firsval=val.slice(0,1).toUpperCase();
      const seconWord = val.slice(1,val.length).toLowerCase()
      return firsval+seconWord;

     
   })
   const finalResult = pascalArr.join(" ");
   return  pascalcase.innerHTML=finalResult;

}
function snake(snake){
   const arr=snake.split(" ");
//    console.log(arr)
  const pascalArr= arr.map((val,index)=>{
      // console.log(val)
    //   const firsval=val.slice(0,1).toUpperCase();
    //   const seconWord = val.slice(1,val.length).toLowerCase()
    //   return firsval+seconWord;
    return val;

     
   })
   const finalResult = pascalArr.join("_");
   return  snakecase.innerHTML=finalResult;

}
function kabab(kabab){
   const arr=kabab.split(" ");
//    console.log(arr)
  const pascalArr= arr.map((val,index)=>{
      // console.log(val)
    //   const firsval=val.slice(0,1).toUpperCase();
    //   const seconWord = val.slice(1,val.length).toLowerCase()
    //   return firsval+seconWord;
    return val;

     
   })
   const finalResult = pascalArr.join("-");
   return kababcase.innerHTML=finalResult;

}
function trim(trim){
   const arr=trim.split(" ");
//    console.log(arr)
  const pascalArr= arr.map((val,index)=>{
      // console.log(val)
    //   const firsval=val.slice(0,1).toUpperCase();
    //   const seconWord = val.slice(1,val.length).toLowerCase()
    //   return firsval+seconWord;
    return val;

     
   })
   const finalResult = pascalArr.join("");
   return trimcase.innerHTML=finalResult;

}




