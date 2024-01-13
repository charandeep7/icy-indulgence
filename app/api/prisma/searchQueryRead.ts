import prisma from "./prismaClient";

export const searchQueryResult = async (query: string) => {
    try {
        const out = await prisma.searchQuery.findMany({
            where: {
                query: {
                    contains: query
                }
                
            }
        })
        return out
    } catch (error: any) {
        throw new Error(error.message)
    } finally {
        prisma.$disconnect()
    }
}