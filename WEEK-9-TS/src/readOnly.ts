type UserReadOnly={
    name:string,
    age:number,
   readonly email:string
}

//now one initialized cannot be changes
const weq:Readonly<UserReadOnly>={
    name:"john",
    age:25,
    email:"john@gmail.com"

}
//weq.email="john2@gmail.com" //error: Cannot assign to 'email' because it is read only

//we can make whole interface readonly
// weq.name="priyanshu"

