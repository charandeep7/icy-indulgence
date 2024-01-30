import { z } from 'zod'

export const forgotPasswordSchema = z.object({
    email: z.string().email({
        message: "Please provide a valid email address"
    }),
})

export type TForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>