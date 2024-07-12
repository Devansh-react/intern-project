import z from 'zod'

export const usernamevalidation = z
    .string()
    .min(2, 'username must be at least 2 characters')
    .max(10, 'username must be at most 10 characters')
    .regex(/^[a-zA-Z0-9]+$/, 'username must contain only letters and numbers')



export const signupSchema = z.object({
    username: usernamevalidation,
    email: z.string().email({ message: "invalid email" }),
    password: z.string().min(8, 'password must be at least 8 characters')
})