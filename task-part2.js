//  let arr1 = [1, 2, 3,1, 4, 5, 2];
// let arr2 = [6, 7, 8, 9, 15, 10,3];

// function mergeArrays() {
//     let arr = []
//   function compereNum (a, b){
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//   }
  
//   let newArr = Array.from(new Set (arr.concat(arr1, arr2))).sort(compereNum)

//   return newArr
// }
// // mergeArrays(arr1, arr2)
// console.log("2222",mergeArrays(arr1, arr2))
///////////////////////////////////

// let arr = [1, 56, 6, 66, 44,32,96]
// let arrowFunc =(arr)=>{
//     //console.log(arr.map(item => String.fromCharCode(item)).join(''))
//     return arr.map(item => String.fromCharCode(item)).join(''); 
//   }

//   arrowFunc(arr)
// //   console.log(arrowFunc(arr))
//////////////////////////
let num1 = 16
let num2 = 18


function add(num1, num2) {
    let a = num1.toString().split('').map(x=>Number(x))
    console.log("AAA",a)
    

    let b = num2.toString().split('').map(x=>Number(x))
    console.log("BBB",b)
    
    let longArray = a.length >= b.length? a : b
    let shortArray = a.length < b.length? a : b
    console.log("long",longArray)
    console.log("short", shortArray)

    let ind = a.length > b.length? a.length-b.length: b.length-a.length  
    
    console.log("ind",ind)
    let startArray = longArray.slice(0, ind)
    console.log('arr1',startArray)

    let endArray = longArray.slice(ind)
    console.log('arr2',endArray)


    let x =[]
    for(i=0; i<endArray.length; i++){
        let sum = endArray[i]+ shortArray[i]
        x.push(sum)
        console.log("x",x)
        
    }
    
    let num3 = startArray.concat(x).join('')
    console.log("333333",+num3)
    
    return +num3;
}
console.log(add(num1, num2))
