import express, { Router, Request, Response } from "express";
import UsersController from "./controllers/users.controller";

const app = express();
app.use(express.json());

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello Word!");
});

router.get("/users", UsersController.list);
router.get("/users/:id", UsersController.getById);
router.post("/users", UsersController.create);
router.delete("/users/:id", UsersController.remove);

app.use(router);

export default app;
