import { Request, Response } from "express";
import { ListUserReceveivedComplimentsService } from "../service/ListUserReceivedComplimentsService.ts";

class ListUserReceivedComplimentsController {
    async handle(request:Request, response:Response) {
        const { user_id } = request;

        const listUserReceveivedComplimentsService = new ListUserReceveivedComplimentsService();

        const compliments = await listUserReceveivedComplimentsService.execute(user_id)

        return response.status(200).json(compliments)
    }
}

export { ListUserReceivedComplimentsController }