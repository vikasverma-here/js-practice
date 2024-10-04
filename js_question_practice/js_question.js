function print() {
    console.log(arguments[0])
  }
  print('helllow',false, 400)

//   const obj = {
//     name: 'deeecode',
//     age: 200,
//     print: function() {
//       console.log(this)
//     }
//   }
  
//   obj.print()

  const obj = {
  name: 'deeecode',
  age: 200,
  print: function() {
    function print2() {
      console.log(this)
    }

    print2()
  }
}

obj.print()