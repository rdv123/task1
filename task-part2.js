 let arr1 = [1, 2, 3,1, 4, 5, 2];
let arr2 = [6, 7, 8, 9, 15, 10,3];

function mergeArrays() {
    let arr = []
  function compereNum (a, b){
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  
  let newArr = Array.from(new Set (arr.concat(arr1, arr2))).sort(compereNum)

  return newArr
}
// mergeArrays(arr1, arr2)
console.log("2222",mergeArrays(arr1, arr2))