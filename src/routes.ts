import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagControler } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserReceivedComplimentsController } from "./controllers/ListUserReceivedComplimentsService.ts";
import { ListUserSentComplimentsController } from "./controllers/ListUserSentComplimentsService";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagControler();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceveivedComplimentsController = new ListUserReceivedComplimentsController();
const listUserSentComplimentsController = new ListUserSentComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post("/users/create", createUserController.handle);
router.post("/tags/create", ensureAuthenticated , ensureAdmin,createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments/create", ensureAuthenticated, createComplimentController.handle);
router.get("/compliments/get/received", ensureAuthenticated, listUserReceveivedComplimentsController.handle);
router.get("/compliments/get/sent", ensureAuthenticated, listUserSentComplimentsController.handle);
router.get("/tags", ensureAuthenticated ,listTagsController.handle)
router.get(
    "/users", 
    ensureAuthenticated ,
    ensureAdmin, 
    listUsersController.handle
)

export { router }