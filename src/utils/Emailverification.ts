// function of email and export it 
// to send the email that contains the verification code 

import { resend } from "@/lib/resendEmail";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/types/APIresponse";
import { ApiError } from "next/dist/server/api-utils";

export async function SendVerificationEmail(
    email: string,
    username: string,
    otp: string
): Promise<ApiResponse> {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'verification code',
            react: VerificationEmail({ username, otp }),
        })
        return {
            success: true,
            message: "verification email sent successfully"
        }
    }
    catch (error) {
        console.error("email cannot send successfully")
        return {
            success: false,
            message: "error"
        }

    }
}
