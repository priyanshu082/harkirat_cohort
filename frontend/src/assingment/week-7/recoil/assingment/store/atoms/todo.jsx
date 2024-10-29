import { atom, selector } from "recoil";
import axios from "axios"

export const items=atom({
    key:"items",
    default:[]
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
    get:({get})=>{
        const todos=get(items)
        const query=get(searchQuery).toLowerCase();
        if(!query) return todos;
        return todos.filter((todo)=>todo.name.toLowerCase().includes(query))
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