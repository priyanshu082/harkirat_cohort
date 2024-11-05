type User3={
    firstname:string,
    lastname:string ,
    age:number,
}



interface User2 {
    firstname:string,
    lastname:string ,
    age:number,
}

type greetArg= string | number

//now we can use it fucntions
function greet2(id: greetArg){
    console.log("hello "+ id )
}

greet2("hell")
greet2(434)


type manager={
    name:string,
    age:number,
}

interface employee{
    name:string,
    age:number,
}

//if we want to ever use "&" or "|" we should use type 
//if you everwant to implemet class you should use interface 
//we can extend interfaces in a class
type techLead= manager | employee

const t: techLead={
    name:"john",
    age:25
}