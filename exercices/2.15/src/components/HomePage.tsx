import { useOutletContext } from "react-router-dom";
import { MovieContext } from "./Movie";
import PageTitle from "./PageTitle";
import MovieTitleList from "./MovieTitleList";

const HomePage = () => {
  const {movies} : MovieContext = useOutletContext();
  return (
    <div>
      <PageTitle title="myMovies" />
      <p>Welcome to myMovies, a site where you can find info about cinemas, movies...</p>
       <h4>My favorites movies </h4>
      <MovieTitleList movies={movies} />
    </div>
  );
};
export default HomePage;