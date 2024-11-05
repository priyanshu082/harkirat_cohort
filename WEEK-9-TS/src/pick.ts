interface UserInterface {
    id:number,
    name:string,
    age:number,
    email:string,
    password:string
}

//now lets suppose we have to update something in user like age name password than we should use subset of interface instead of creating a new interface 
type updateProps=Pick<UserInterface,'name'|'age'|'email'>
//we should use this thing 
//becuase if change age :number to string than we have to make the changes in every interface we have created
//we can do this in both way in type aur interface both

function updateUser(updateProps:updateProps){
  
}
