import { Request, Response } from "express";
import { Actor } from "../models/Actor";

class ActorsController {
  static async list(req: Request, res: Response) {
    const actors = await Actor.findAll();

    res.send(actors);
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const actor = await Actor.findByPk(Number(id));
    res.send(actor);
  }

  static async create(req: Request, res: Response) {
    const { name } = req.body;
    const actor = await Actor.create({ name });
    res.send(actor);
  }

  static async remove(req: Request, res: Response) {
    const { id } = req.params;
    const actor = await Actor.findByPk(Number(id));
    if (actor) {
      res.send("Actor removed");
      actor?.destroy();
    } else {
      res.status(404).json({ error: "Actor not found" });
    }

    res.status(204).send();
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;

    const actor = await Actor.findByPk(Number(id));
    if (actor) {
      await actor.update({
        name: name,
      });
      res.status(200).send(actor);
    } else {
      res.status(404).json({ error: "Actor not found" });
    }

    res.status(204).send();
  }
}

export default ActorsController;
