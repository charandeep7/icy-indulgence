import prisma from "../prisma/prismaClient";

export const getUserIdByEmail = async (email: string) => {
    try {
        const id = await prisma.user.findUnique({
            where: {
                email
            },
            select: {
                id: true,
                createdAt: false,
                email: false,
                password: false,
                updatedAt: false,
                username: false
            }
        })
        return id
    } catch (error: any) {
        throw new Error(error.message)
    } finally {
        prisma.$disconnect()
    }
}

export const getUserIdDetail = async (id: number) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id
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