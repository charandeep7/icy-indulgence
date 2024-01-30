import { z } from "zod";

export const signUpSchema = z.object({
    username: z.string().refine((value) => {
        // Minimum length 3, maximum length 20
        if (value.length < 3 || value.length > 20) return false;

        // First two characters must be letters
        if (!/^[a-zA-Z]{2}/.test(value)) return false;

        // Only letters, numbers, dot, and underscore allowed
        if (!/^[a-zA-Z0-9._]+$/.test(value)) return false;

        // No spaces allowed
        if (/\s/.test(value)) return false;

        return true;
    }, {
        message: "Username conatains min of 3 lowercase letters\n & first two characters must be letters",
    }),
    email: z.string().email({
        message: "Please provide a valid email address",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters",
    }),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;