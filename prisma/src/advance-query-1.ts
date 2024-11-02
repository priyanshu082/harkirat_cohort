import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


const main =async ()=>{
    try {
        let res=await prisma.user.findMany({
            where:{
                email:{
                    endsWith:'gmail.com'
                },
                posts:{
                    some:{
                        published:true,
                    }
                }
            },
            include:{
                posts:{
                    where:{
                        published:true
                    }
                }
            }
        })

        console.log(res)
    } catch (error) {
        console.log(error)
    }
   
}

main()