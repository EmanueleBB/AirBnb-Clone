import { PrismaClient } from "@prisma/client";


declare global{
    var prisma: PrismaClient | undefined
}

//best practice for prisma with next js 13. We assign the client to a global 
//variable, not affected by refreshes

const client = globalThis.prisma || new PrismaClient()
if(process.env.NODE_ENV !=='production') globalThis.prisma = client

export default client;