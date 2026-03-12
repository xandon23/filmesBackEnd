import express, { Router, Request, Response } from "express";
import UsersController from "./controllers/users.controller";
import MoviesController from "./controllers/movies.controller";

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
router.put("/users/:id", UsersController.update);

router.get("/movies", MoviesController.list);
router.get("/movies/:id", MoviesController.getById);
router.post("/movies", MoviesController.create);
router.delete("/movies/:id", MoviesController.remove);
router.put("/movies/:id", MoviesController.update);

app.use(router);

export default app;
