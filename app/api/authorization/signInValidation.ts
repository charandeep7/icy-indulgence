import prisma from "../prisma/prismaClient";

export const checkUserEmailExists = async (email: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email.toLowerCase()
            },
        });
        return user
    } catch (err: any) {
        throw new Error(err.message)
    } finally {
        prisma.$disconnect()
    }
}