

const anagram =(str1,str2)=>{
    console.log(str1)
 str1 = str1.toLowerCase()
 console.log(str1)
 str1= str1.split('').sort()
 console.log(str1)
 str1 = JSON.stringify(str1)
 console.log(str1)
 console.log(str2)
 str2 = str2.toLowerCase()
 console.log(str2)
 str2= str2.split('').sort()
 console.log(str2)
 str2 = JSON.stringify(str2)
 console.log(str2)
 
    return  str1 ===str2
}
console.log(anagram('friend', 'Finder')); //true
console.log(anagram('hello', 'bye')); //false

