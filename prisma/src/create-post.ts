import { PrismaClient } from "@prisma/client";

const client=new PrismaClient();

const main=async (id:number)=>{
    try {
        await client.post.create({
            data:{
                title:"HEllo world",
                content:"asacjndcjkjjjvjvbhjfbvbfhvbhfsvbasdhbvhsbvhbshdfvbhdsbvhbsdhvbsdhv",
                authorId:id,
            }
        })

        console.log("Post created")
    } catch (error) {
        console.log("error while posting data",error)
    }
}

main(1)