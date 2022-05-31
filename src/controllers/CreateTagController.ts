import { Request, Response } from "express";
import { CreateTagService } from "../service/CreateTagService";

class CreateTagControler {
    async handle(request: Request, response: Response) {
        const { name } = request.body;
 
        const createTagService = new CreateTagService();

        const tag = await createTagService.execute(name);

        return response.json(tag);
    }
}

export { CreateTagControler }