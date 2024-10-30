import { atom, atomFamily, selector, selectorFamily } from "recoil";
import axios from "axios"

export const items=atom({
    key:"items",
    default:[]
    //doing in this way has its downside as if one of todo changes all the todos will change cuasing the re-render 
})

//so we use atomfamily for this 
//there is a concept of atom family here 
export const todoFamily=atomFamily({
    key:"todoFamily",
    default:id=>{}
    //filter the specify todo with specific id 
    //this family create a separate atom for every component and return the atom and due this only particular component re render not all components
})  

//for getting data from backend and use it we use selectorFamily
export const todoFamily2=atomFamily({
    key:"todoFamily2",
    default:selectorFamily({
        key:"todoSelectorFamily",
        get: (id)=>async({get})=>{
            const res = await axios.get("api here ")
            return //the data here
        }
    })
})


export const item=atom({
    key:"item",
    default:{
        name:"",
        description:""
    }
})

export const searchQuery=atom({
    key:"searchQuery",
    default:""
})

export const ItemSelector=selector({
    key:"searchResults",
    get:function(id){
        return async function ({get}){
            const res= await axios.get("apis here "+ id)
            return res.data.data
        }
    }
})

//now to learn how to fetch async data and use it in recoil
//example
//we cant use data fecthing directly in default value 
//it cant be async fucntions
export const notifications=atom({
    key:"notifications",
    default:selector({
        key:"notificationsAtomSelector",
        get: async ()=>{
            const res =await axios.get("apis")
            return res.data
        }
    })
})
//we can use selectore to incorporate the async data in recoil
//this will automatically generate the structure of data and store it in the form of obejct and you can access them in from end 


