import { z } from 'zod'

export const signInSchema = z.object({
    email: z.string().email({
        message: "Please provide a valid email address"
    }),
    password: z.string().min(1,{
        message: "Please provide password"
    })
})

export type TSignInSchema = z.infer<typeof signInSchema>