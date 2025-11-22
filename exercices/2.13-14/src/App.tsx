import { useEffect, useState } from 'react'
import './App.css'
import type { Joke } from './types';

function App() {
  const [joke, setJoke] = useState<Joke | undefined>(undefined);

  useEffect(()=> {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      setJoke({
        texte: data.joke ?? "No joke found",
        categorie: data.category ?? "Unknow",
      });
    });
  },[]);

  if(!joke){
    return<p>Loading...</p>;
  }

  return (
   <div>
    <h3>Random joke</h3>
    <h4>{joke.categorie}</h4>
    <blockquote cite="https://www.huxley.net/bnw/four.html">
    <p>{joke.texte}</p>
    </blockquote>
    <p>
      <cite>https://v2.jokeapi.dev/joke.category</cite>
    </p>
   </div>
);
};

export default App
