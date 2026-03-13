import { Request, Response } from "express";
import { Movie } from "../models/Movie";
import Genre from "../models/Genre";

class MoviesController {
  static async list(req: Request, res: Response) {
    const movies = await Movie.findAll({
      include: [{ model: Genre, as: "genre" }],
    });

    res.send(movies);
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const movie = await Movie.findByPk(Number(id));
    res.send(movie);
  }

  static async create(req: Request, res: Response) {
    const { title } = req.body;
    const movie = await Movie.create({ title });
    res.send(movie);
  }

  static async remove(req: Request, res: Response) {
    const { id } = req.params;
    const movie = await Movie.findByPk(Number(id));
    if (movie) {
      res.send("Movie removed");
      movie?.destroy();
    } else {
      res.status(404).json({ error: "Movie not found" });
    }

    res.status(204).send();
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title } = req.body;

    const movie = await Movie.findByPk(Number(id));
    if (movie) {
      await movie.update({
        title: title,
      });
      res.status(200).send(movie);
    } else {
      res.status(404).json({ error: "Movie not found" });
    }

    res.status(204).send();
  }
}

export default MoviesController;
