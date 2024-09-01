const inputval = document.querySelector('input');
let priviousVal = ""
let firstThreeNum = '';
inputval.addEventListener('input',(e)=>{
    const ttargettedVal = e.target.value;
    console.log(priviousVal,ttargettedVal)
    if(/\d+$/g.test(ttargettedVal)){
        inputval.value=ttargettedVal;
    }else{
        inputval.value = ttargettedVal.substring(0,ttargettedVal.length-1)
    }
    if(ttargettedVal.length === 4 && priviousVal.length<ttargettedVal.length){
         firstThreeNum=ttargettedVal.substring(0,3)
        inputval.value = `+(${firstThreeNum}) - ${ttargettedVal[ttargettedVal.length - 1]}`
    }
   else if(ttargettedVal.length === 9 && priviousVal.length>ttargettedVal.length){
        inputval.value = firstThreeNum;
    }
    priviousVal = ttargettedVal ;
  
})