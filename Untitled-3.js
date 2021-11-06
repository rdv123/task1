

const findVowels =(str='')=>{
    console.log(str)
    let result =[]
  const arr = ['a','e','i','y','o']
   arr.forEach((v)=>{
   console.log(v)
   if(str.includes(v)){
    result.push(v)
   }
   })
   console.log(result)
   return result.length
}


console.log(findVowels('hello'))