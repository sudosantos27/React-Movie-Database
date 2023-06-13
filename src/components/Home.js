import React from "react";

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// Components
import HeroImage from "./HeroImage";
import Grid from './Grid';
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// Image
import NoImage from "../images/no_image.jpg";

const Home = () => {
    // Fetch data using custom hook
    const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();

    console.log(state);

    // If there is an error, display an error message
    if (error) return <div>Something went wrong...</div>;

    return (
        <>
            {/* Display the HeroImage only if there is no search term and there is at least one result */}
            {!searchTerm && state.results[0] ? (
                <HeroImage 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
            ) : null}
            
            {/* Display the SearchBar component */}
            <SearchBar setSearchTerm={setSearchTerm}/>

            {/* Display the Grid component with a header based on the search term */}
            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {/* Map through the movie results and display Thumb components */}
                {state.results.map(movie => (
                    <Thumb 
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        movieId={movie.id}
                    />
                ))}
            </Grid>

            {/* Display the Spinner component while loading */}
            {loading && <Spinner />}

            {/* Display the Load More button if there are more pages to load */}
            {state.page < state.total_pages && !loading && (
                <Button text="Load More" callback={() => setIsLoadingMore(true)}/>
            )}
        </>
    );
};

export default Home;
