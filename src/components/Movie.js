import React from "react";
import { useParams } from "react-router-dom";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";

// Hook
import { useMovieFetch } from "../hooks/useMovieFetch";
// Image
import NoImage from "../images/no_image.jpg";

const Movie = () => {
    // Get the movieId from the URL parameters
    const { movieId } = useParams();

    // Fetch movie data using custom hook
    const { state: movie, loading, error } = useMovieFetch(movieId);

    // Display the Spinner component while loading
    if (loading) return <Spinner />;
    // Display an error message if there is an error
    if (error) return <div>Something went wrong...</div>;

    return (
        <>
            {/* Display the BreadCrumb component with the movie title */}
            <BreadCrumb movieTitle={movie.original_title} />

            {/* Display the MovieInfo component with the movie data */}
            <MovieInfo movie={movie} />

            {/* Display the MovieInfoBar component with the movie's running time, budget, and revenue */}
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />

            {/* Display the Grid component with a header for the actors */}
            <Grid header="Actors">
                {/* Map through the actors and display Actor components */}
                {movie.actors.map(actor => (
                    <Actor 
                        key={actor.credit_id} 
                        name={actor.name} 
                        character={actor.character} 
                        imageUrl={
                            actor.profile_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            : NoImage
                        }
                    />
                ))}
            </Grid>
        </>
    );
};

export default Movie;
