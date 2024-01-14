import prisma from "./prismaClient";

export const searchQueryResult = async (query: string) => {
    const params = query.trim().split(' ').map((e) => e.charAt(0).toUpperCase()+e.slice(1)).join(' ')
    try {
        const out = await prisma.searchQuery.findMany({
            where: {
                query: {
                    contains: params,   
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