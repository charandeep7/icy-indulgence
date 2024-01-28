import { z } from 'zod'

export const changePasswordSchema = z.object({
    currentPassword: z.string().min(1, {
        message: "Please enter current password"
    }),
    newPassword: z.string().min(6, {
        message: "New password must be of 6 characters"
    }),
    confirmNewPassword: z.string().min(1, {
        message: "New password must be of 6 characters"
    }),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords don't match",
    path: ["confirmNewPassword"],
});

export type TchangePasswordSchema = z.infer<typeof changePasswordSchema>