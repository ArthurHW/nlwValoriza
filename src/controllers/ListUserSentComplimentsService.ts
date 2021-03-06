import { Request, Response } from "express";
import { ListUserSentComplimentsService } from "../service/ListUserSentComplimentsService";
class ListUserSentComplimentsController {
    async handle(request:Request, response:Response) {
        const { user_id } = request;

        const listUserSentComplimentsService = new ListUserSentComplimentsService();

        const compliments = await listUserSentComplimentsService.execute(user_id)

        return response.status(200).json(compliments)
    }
}

export { ListUserSentComplimentsController }