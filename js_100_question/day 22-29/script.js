// !!!!!! 54- Accept size n from user and create a n size array then take n inputs into the and finally 
//  !!     Print the sum & Avg of all elements.===========================================================================>

//     let size  = parseInt(prompt("enter the size of array"))
//     let arrSize  = [];
//     for(let i =0;i<size; i++){
// let digit = parseInt(prompt(`${size}  Enter the random digit for array element  ${i+1} `))
// arrSize.push(digit)
//     }
//     console.log(arrSize)
// let sum =0;
//     for(let i =0;i<size;i++){
//     sum = sum+arrSize[i];

//     }
//  console.log ('sum of array element is ' , sum )   

// if(size>0){
//     let average=sum/size;
//     console.log( "Average of given array element ", average)
// }
// else{
//     console.log("size of array is less than zero")
// }


//  !!  55- Find the greatest element.
//  !!    {2, 96, 69, 77, 145, 20} = Max element = 145 found at 4 index

// let arr =  [2, 96, 69, 77, 145, 20,22,2313,2,23,2314,124432434,2343243242432]
// let largest = 0;
// for(let i=0;i<arr.length;i++){
// if(arr[i]>arr[largest]){
//   largest = i;
// }
// }
// console.log(largest,arr[largest])

// !! 56- Find the second greatest element 
//  !!     {2, 96, 69, 77, 145, 20} = Second greatest element = 96
// let arr =  [2, 96, 69, 77, 145, 20] 
// let first = 0;
// let second = 0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>first){
       
//         second = first;
//         first=arr[i]
        

//     }else if (arr[i]>second && arr[i] != first ){
//        second = arr[i]
//     }
// }
// console.log(first)
// console.log(second)


// !!!!57- Check if array is sorted in increasing order or not.
//        Ex 1 - { 1, 5, 8,  9, 10, 15 } - OP = "YES"
//        Ex 2 - { 1, 8, 6, 9, 10, 15 } - OP = "NO"


// let arr = [1,2,3,4,5,9,7,8,9]
// let arrIsSorted = true;
// for(let i=0; i<arr.length;i++){
// if(arr[i]>arr[i+1]){
//     arrIsSorted=false;
//     break;
// }
// }
// console.log(arrIsSorted)

// !! 58- Take n integer inputs from user and store them in an array. 
//    !     Now, copy all the elements in an another array but in reverse order and print it.

// let size = +prompt("enter the size of and array ")
// let array =[]
// for(let i=0;i<size;i++){
//     let digit = +prompt("enter the number ")
//     array.push(digit)
// }
// console.log(array)
// let reverseArray= array.reverse()
// console.log(reverseArray)

// !!59- Array left Rotation by 1


// let arr = [1,2,3,4,4,56,7,7,12]
// // let temp=arr[0]

// for (let i = 0; i < arr.length-1; i++) {
//    arr[i]=arr[i+1]    
// }
// console.log (arr)



// !!60- Array left rotation by K elements
// let k = +prompt("enter the number of rotation ")
// let arr = [3,4,31,42,43,2,4,22,34,]

// let n = arr.length;
// k=k/n

// let endArr =arr.slice(3)
// let startArr = arr.slice(0,3)

// let rotation = endArr.concat(startArr)
// console.log(arr)
// console.log(rotation)


// !!61- Array Reverse Without Using Extra space

// let arr = [3,4,5,6,7,8,86,5,44,33]
// console.log(arr)
// let left = 0
// let right = arr.length-1;
// while(left<right){
//    let temp= arr[left]
//    arr[left]=arr[right]
//    arr[right]=temp
//    left++;
//    right--;
// }
// console.log(arr)


// !!!62- Linear Search an array - If element found print the index else -1

// let arr = [4,3,42,34,32,2,3,34,43,23,34,4,23,34,32,32,23,23]
// let findNum = +prompt("enter the number two find in array ")
// function findtheNumber (findNum){
//    for (let i=0; i<=arr.length-1;i++){
//       if (arr[i]===findNum){
//       return i;
//       }
//       }
//       return -1;
// }

// console.log(findtheNumber(findNum))

// !!!63- Binary Search. If element found print the index else -1

// let findElement = 6;

// function BinarySearch (findElement){
//    let arr = [24,23,446,6,767,87,66,5,453,43]
//  arr.sort((a,b)=> a-b)
// console.log(arr)
// let start=0; 
// let end = arr.length-1;

//    while(start<end ){
//       let mid = Math.floor((start+end)/2 ) 
//       if(arr[mid]==findElement){
//          return mid;
//       }else if(arr[mid]>findElement){
//          end = mid-1;
//       }else{
//          start=mid+1;
//       }
//    }
//    return -1;
// }

// console.log(BinarySearch(findElement))


// !!!! Bubble sort =========================================================>
// let arr = [87, 35, 12, 59, 67, 99, 21, 45, 76, 11]
// for(let i =0; i<=arr.length; i++){
//     for(let j=0; )
// }