
const fl = () =>{
let a =[1, [2, [3, [4,5]]]]
let b =a.join().split(',')
let v = a.flat(Infinity)
console.log(v)
let c = []

console.log(a)
console.log(b)
console.log(c)
   const numberArr=b.map(Number)
console.log(numberArr)
return numberArr
}
console.log(fl([1, [2, [3, [4,5]]]]))