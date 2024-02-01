import { NextResponse } from "next/server";
import prisma from "../prisma/prismaClient";
import bcrypt from 'bcrypt'

export const resetPassword = async (email: string,
    newPassword: string) => {
    try {
        const hashPassword = await bcrypt.hash(newPassword, 10)
        await prisma.user.update({
            where: {
                email
            },
            data: {
                password: hashPassword
            }
        })
        return NextResponse.json({
            type: 'success',
            message: "Password updated successfully",
        });
    } catch (error: any) {
        throw new Error(error.message)
    } finally {
        prisma.$disconnect()
    }
}