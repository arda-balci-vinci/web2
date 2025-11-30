import { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieListView from "./MovieListView";
import { Movie, MovieContext } from "./Movie";
import PageTitle from "./PageTitle";
import { useOutletContext } from "react-router-dom";

const MovieListPage =()=> {

 const {movies}:MovieContext = useOutletContext();

return(
    <div>
   <PageTitle title="My favorite movies" />

        <MovieListView movies={movies} />

        <br /><br /><br /><br />
        </div>
);

};

export default MovieListPage;