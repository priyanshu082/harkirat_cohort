//how will you assing object a type
//there we use interfaces

//we need to define user object again again if we are not using interfaces

interface User{
    firstname:string,
    lastname:string,
    age:number
}

const isLegal=(user:User)=>{
 if(user.age>18) return true;
 else return false 
}

const greet=(user:User)=>{
 console.log("hi there "+ user.firstname)
}

console.log(isLegal({
    firstname:"priyanshu",
    lastname:"singh",
    age:24
}))

greet({
    firstname:"priyanshu",
    lastname:"singh",
    age:24
})


// INterface can be implemented as classes but types cannot be implemented as classes