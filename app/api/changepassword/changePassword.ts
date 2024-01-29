import { NextResponse } from "next/server";
import prisma from "../prisma/prismaClient";
import bcrypt from 'bcrypt'

export const changePassword = async (currentPassword: string,
    newPassword: string,
    name: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                username: name
            },
            select: {
                username: false,
                email: false,
                password: true,
                createdAt: false,
                updatedAt: false
            }
        })
        if (!user) {
            return NextResponse.json(
                {
                    type: 'error',
                    message: "User not found",
                },
                {
                    status: 404,
                }
            );
        }
        const isPasswordCorrect = await bcrypt.compare(currentPassword, user.password)
        if (!isPasswordCorrect) {
            return NextResponse.json({
                type: 'error',
                message: "Current Password didn't match"
            }, {
                status: 400
            })
        }
        const hashPassword = await bcrypt.hash(newPassword, 10)
        await prisma.user.update({
            where: {
                username: name
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