// const randomcolor = function(){
//     const hex = '0123456789ABCDEF';
//     let color = "#"
//     for (let i = 0; i<6;i++){
//         color += hex[Math.floor(Math.random()*16)]

//     }
//     return color;
// }
// console.log(randomcolor())
// let setIntervalId;
// const start = document.getElementById("start")
// const end = document.getElementById('end')
// const startChanging=function(){
//     function bg (){
//         document.body.style.backgroundColor=randomcolor()
//     }
//   setInterval(bg,1000)

// }
// const stopChanging = function(){
// clearInterval(setIntervalId)
// }

// start.addEventListener('click',startChanging)
// end.addEventListener('click',stopChanging)

//generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
    }
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  
  