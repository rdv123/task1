// let vowels = ['a','e','i','u','o']
// let v = 'helelo'
// v= v.split('')
// console.log(v)
// // vowels.forEach(a => a==)



const findVowels = str =>{
    str = str.toLowerCase()
    str = str.split("")
    str = str.join('')
    // str = JSON.stringify(str)
    console.log(str)
    // str = str.filter((e)=>{
    // e
    // })
    // str.forEach((el) => {
    // });
    let e = 'e'
    let a = 'a'
    let i = 'i'
    let u = 'u'
    let o = 'o'
    let arr = []
    for(let courent = 0; courent<str.length; courent++){
        console.log(courent)
        console.log(str[courent])

        if(str[courent]==a || str[courent]==e || str[courent]==i || str[courent]==u || str[courent]==o){
        console.log("vowels")
        
        console.log(courent)
        arr.push(str[courent])
        console.log(str)
        
        
    }

}

console.log()
console.log(str)
console.log(str.length)
console.log(arr)
return arr.length
} 



console.log(findVowels('hello'))//2