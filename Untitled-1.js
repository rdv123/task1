console.log("test");

const person = {
    name:'vova',
    job:'doctor', 
    say() {
        console.log('Hello  ' + this.name)
    }
}

const person2 = {
    name:'denis',
    job:'non', 
    
}

const  fun= person.say.bind(person2)
console.log(fun())