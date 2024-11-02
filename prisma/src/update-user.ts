import { PrismaClient } from "@prisma/client";

const prisma =new PrismaClient();

const main=async ()=>{
    try {
        await prisma.user.update({
            where:{
                id:1,
            },
            data:{
                name:"John Doe",
            }
        })
    } catch (error) {
       console.log(error) 
    }
}

main();