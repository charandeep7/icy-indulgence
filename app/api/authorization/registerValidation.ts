import prisma from "../prisma/prismaClient";
import bcrypt from 'bcrypt'

export const checkEmailExists = async (email: string) => {
    try {
        const res = await prisma.user.findUnique({
            where: {
                email: email.toLowerCase()
            }
        })
        return res
    } catch (err: any) {
        throw new Error(err.message)
    } finally {
        prisma.$disconnect()
    }
}

export const checkUsernameExists = async (username: string) => {
    try {
        const res = await prisma.user.findUnique({
            where: {
                username
            }
        })
        return res
    } catch (err: any) {
        throw new Error(err.message)
    } finally {
        prisma.$disconnect()
    }
}

export const createUser = async (username: string, email: string, password: string) => {
    try {
        const res = await prisma.user.create({
            data: {
                username,
                email: email.toLowerCase(),
                password: await bcrypt.hash(password, 10),
            }
        })
        return res
    } catch (err: any) {
        throw new Error(err.message)
    } finally {
        prisma.$disconnect()
    }
}