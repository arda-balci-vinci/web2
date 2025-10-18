import { type IMovie } from "./Movie";

interface CinemaProps {
  name: string;
  movies: IMovie[];
}


const Cinema =(props : CinemaProps) =>(

      <div>
        <h2>{props.name}</h2>
        <ul>
           {props.movies.map((movie) => (
          <li key={movie.title}>
            <strong>{movie.title}</strong> - Réalisateur :{movie.director}
          </li>
            ))}
        </ul>
      </div>
  );



  export default Cinema;