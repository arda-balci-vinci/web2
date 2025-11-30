
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { Movie, MovieContext, NewMovie } from "./Movie";
import NavBar from "./NavBar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { fetchMovies } from "../utils/film-service";


const App = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const navigate = useNavigate();

    const initMovies = async () => {
    try {
      const movies = await fetchMovies();
      setMovies(movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initMovies();
  }, []);
  
  const onMovieAdded = (newMovie: NewMovie) => {
    console.log("Movie to add:", newMovie);
    const nextId = Math.max(...movies.map((movie) => movie.id)) + 1;
    const movieToBeAdded = { id: nextId, ...newMovie };
    setMovies([...movies, movieToBeAdded]);
    navigate("/movie-list");
  };

   const movieContext: MovieContext = {
    movies,
    onMovieAdded,
  };
    return (
    <div>
      <Header urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
        <h1>Tous sur les films</h1>
        <NavBar/>
      </Header>

      <main className="page-content">
        <Outlet context={movieContext}/>
      </main>

      <Footer urlLogo="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
        <p>© myMovies</p>
      </Footer>
    </div>
  );
};

export default App;