import z from 'zod'


export const MessageSchema = z
    .string()
    .min(6)
    .max(30)