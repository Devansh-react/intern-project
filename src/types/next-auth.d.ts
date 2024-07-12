import nextAuth from "next-auth";

declare module nextAuth {
    interface User {

        _id?: string;
        isverified?: boolean;

    }
}