import { z } from "zod";

export const signUpSchema = z.object({
    username: z.string().toLowerCase().trim().min(3, {
        message: "Username conatains min of 3 lowercase letters",
    }),
    email: z.string().email({
        message: "Please provide a valid email address",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters",
    }),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;