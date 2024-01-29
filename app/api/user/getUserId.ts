import prisma from "../prisma/prismaClient";

export const getUserIdDetail = async (name: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                username: name
            },
            select: {
                id: false,
                createdAt: true,
                email: true,
                password: false,
                updatedAt: true,
                username: true
            }
        })
        return user
    } catch (error: any) {
        throw new Error(error.message)
    } finally {
        prisma.$disconnect()
    }
}