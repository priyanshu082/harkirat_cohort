//suppose you created a interface in which you want to place some optional fields 
interface partialUser{
    id:number,
    email:string ,
    name:string,
    age?:number,
    address?:string
}

//in this age and aaddress are optional

type updateProps2=Pick<partialUser , "name" | "address" | "age">

//now if you want some thing fromt this to be partial
type updatePropsPartial=Partial<updateProps2>

function update(update:updatePropsPartial){

}

update({})