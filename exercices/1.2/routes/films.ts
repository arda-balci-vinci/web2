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




router.get('/',(_req,res)=>{
    res.json(defaultFilms)
});
















export default router;