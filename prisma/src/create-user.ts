import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    await prisma.user.create({
        data:{
            email:"hello@gmail.com",
            name:"Priyanshu Singh"
        }
    })
}

main()