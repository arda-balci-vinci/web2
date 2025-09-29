import { Router } from "express"
import { Films } from "../types";


const router = Router();

const defaultFilms:Films[] = [
    {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160_000_000,
    description:
      "Un voleur spécialisé dans l’extraction d’informations en rêve tente l’ultime mission.",
    imageUrl: "https://m.media-amazon.com/images/I/51oD2YHq8hL._AC_.jpg",
  },
  {
    id: 2,
    title: "Le Fabuleux Destin d'Amélie Poulain",
    director: "Jean-Pierre Jeunet",
    duration: 122,
    budget: 10_000_000,
    description:
      "Amélie, jeune serveuse à Montmartre, décide de changer la vie des autres.",
    imageUrl: "https://m.media-amazon.com/images/I/71qqPpz9YjL._AC_SY679_.jpg",
  },
  {
    id: 3,
    title: "Parasite",
    director: "Bong Joon-ho",
    duration: 132,
    budget: 11_000_000,
    description:
      "Une famille pauvre s’infiltre peu à peu dans la maison d’une famille riche.",
    imageUrl: "https://m.media-amazon.com/images/I/81D2Cr3L0wL._AC_SY679_.jpg",
  },
];






router.get("/", (req, res) => {
const minStr = req.query["minimum-duration"];
if (minStr !== undefined) {
const min = Number(minStr);
if (!Number.isFinite(min) || min <= 0) {
// message JSON d'erreur demandé dans l'énoncé
return res.status(400).json({ error: "Wrong minimum duration" });
}
const filtered =defaultFilms.filter((f) => f.duration >= min);
return res.json(filtered);
}
return res.json(defaultFilms);
});


router.get(":id", (req, res) => {
const id = Number(req.params.id);

if (!Number.isInteger(id) || id <= 0) {
return res.status(400).json({ error: "Invalid id" });
}

const film = defaultFilms.find((f) => f.id === id);
if (!film) 
return res.status(404).json({ error: "Film not found" });
return res.json(film);
});



router.post("/", (req, res) => {
const { title, director } = req.body;
const duration = Number(req.body.duration);
const budget = req.body.budget !== undefined ? Number(req.body.budget) : undefined;


if (!title || !director) return res.status(400).json({ error: "Missing title or director" });
if (!Number.isFinite(duration) || duration <= 0) return res.status(400).json({ error: "Wrong duration" });
if (budget !== undefined && (!Number.isFinite(budget) || budget <= 0)) return res.status(400).json({ error: "Wrong budget" });


const nextId = defaultFilms.length ? Math.max(...defaultFilms.map((f) => f.id)) + 1 : 1;
const newFilm: Films = {
id: nextId,
title,
director,
duration,
...(budget !== undefined ? { budget } : {}),
description: req.body.description,
imageUrl: req.body.imageUrl
};



// données en mémoire
defaultFilms.push(newFilm);


return res.status(201).json(newFilm);
});










export default router;