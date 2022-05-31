import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagControler } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagControler();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users/create", createUserController.handle);
router.post("/tags/create", ensureAdmin,createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments/create", createComplimentController.handle);

export { router }