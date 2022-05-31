import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagControler } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagControler();

router.post("/users/create", createUserController.handle);
router.post("/tags/create", ensureAdmin,createTagController.handle);

export { router }