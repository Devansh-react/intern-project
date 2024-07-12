import { message } from "@/models/Model";

export interface ApiResponse {
    success: boolean,
    message: string,
    // optionl ro sedn with response we use ? optional chaining
    IsAcceptingMessage?: boolean,
    messages?: Array<message>

}