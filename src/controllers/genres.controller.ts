import { Request, Response } from "express";
import { Genre } from "../models/Genre";

class GenresController {
  static async list(req: Request, res: Response) {
    const genres = await Genre.findAll();

    res.send(genres);
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const genre = await Genre.findByPk(Number(id));
    res.send(genre);
  }

  static async create(req: Request, res: Response) {
    const { name } = req.body;
    const genre = await Genre.create({ name });
    res.send(genre);
  }

  static async remove(req: Request, res: Response) {
    const { id } = req.params;
    const genre = await Genre.findByPk(Number(id));
    if (genre) {
      res.send("Genre removed");
      genre?.destroy();
    } else {
      res.status(404).json({ error: "Genre not found" });
    }

    res.status(204).send();
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;

    const genre = await Genre.findByPk(Number(id));
    if (genre) {
      await genre.update({
        name: name,
      });
      res.status(200).send(genre);
    } else {
      res.status(404).json({ error: "Genre not found" });
    }

    res.status(204).send();
  }
}

export default GenresController;
