let arr = [9, 4, 56, 33, 20, 15, 5];

let a = arr.sort((a, b) => a - b);
console.log(a);

const f1 = () => {
  for (let i = 0; i < arr.length; i++) {
    let el1 = arr[i];

    console.log(el1);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};
console.log(f1(arr));

// let arr = [1,4,56,33,20,15,5]
// const f1 = ()=>{
//     let i =0
//     console.log(arr[i+1])
//     let a=arr.sort(v=>{
//         console.log(v)
//         console.log(arr[i++])
//         if(v < arr[i++]){
//             v=arr[i]
//             console.log(v)
//         } else{
//             v=arr[i++]
//             console.log(v)
//         }
//     })
//     console.log(a)
// }
// console.log(f1(arr))
