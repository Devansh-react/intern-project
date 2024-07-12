import dbConnect from "@/lib/dbConneection";
import usermodel from "@/models/Model";
import { SendVerificationEmail } from "@/utils/Emailverification";
import bcryptjs, { hash } from "bcryptjs";
import { STATUS_CODES } from "http";
import { NextRequest, NextResponse } from "next/server";
import { date } from "zod";

dbConnect()
async function POST(request: NextRequest) {


    try {

        const { name, email, password } = await request.json()

        const UserwithUSernameExist = await usermodel.findOne({
            isAcceptiongmessage: true,
            Username: name,
            isVerified: true
        })


        if (UserwithUSernameExist) {
            return Response.json({
                success: false,
                message: "username already exist",
                status: 400
            }
            )
        }

        const UserwithEmailExist = await usermodel.findOne({
            Email: email,
            isVerified: true
        })

        const verificationcode = Math.floor(Math.random() * 1000000)
        let verifycode = verificationcode.toString()


        if (UserwithEmailExist) {
            if (UserwithEmailExist.isVerified) {
                return Response.json({
                    success: false,
                    message: "email already exist",
                    status: 400
                }
                )
            } else {
                const hashpassword = await bcryptjs.hash(password, 10)
                UserwithEmailExist.password = hashpassword
                UserwithEmailExist.verificationcode = verifycode;
                UserwithEmailExist.isVerified = true;
                UserwithEmailExist.verifycodeExpiry = new Date(Date.now() + 3600000)

                await UserwithEmailExist.save()

            }

        } else {
            //creating the user
            //hashing the given password
            const HashPassword = bcryptjs.hash(password, 10)
            const Expierydate = new Date(Date.now() + 3600000)

            // to create a new user in usermodel
            const NewUser = new usermodel({

                Username: name,
                Email: email,
                password: HashPassword,
                verificationcode: verificationcode,
                verifycodeExpiry: Expierydate,
                isVerified: false,
                isAcceptiongmessage: true,
                message: []


            })
            //to save the user
            await NewUser.save()
            console.log(NewUser)

            return NextResponse.json({
                success: true,
                message: "user created successfully",
                status: 200
            })


        }

        //send the verfication email after the procress when the procress is not return 

        const EmailCode = SendVerificationEmail(
            email,
            name,
            verifycode
        )

        if (!EmailCode) {
            return Response.json({
                success: false,
                message: "error while sending email",
                status: 500
            })
        } else {
            return Response.json({
                success: true,
                message: " email send successfully",
                status: 200
            })
        }

    }


    catch (error) {
        console.error("Error while registering user :-->", error)
        return Response.json(
            {
                success: false,
                message: "error while registering user",
                status: 500
            }
        )

    }

}