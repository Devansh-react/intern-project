import z from 'zod'
import { usernamevalidation } from './signupSchema'

export const signinSchema = z.object({
    username: usernamevalidation,
    password: z.string().min(8)
})