import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Styles
import { Image } from "./Thumb.styles";

/**
 * Thumb component displays a thumbnail image of a movie.
 * It can be made clickable by providing the 'movieId' and 'clickable' props.
 */
const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      // Render the thumbnail as a link to the movie details page
      <Link to={`/${movieId}`}>
        <Image src={image} alt='movie-thumb' />
      </Link>
    ) : (
      // Render the thumbnail as a static image
      <Image src={image} alt='movie-thumb' />
    )}
  </div>
);

Thumb.propTypes = {
  image: PropTypes.string, // URL of the thumbnail image
  movieId: PropTypes.number, // ID of the movie (for clickable thumbs)
  clickable: PropTypes.bool // Indicates whether the thumb is clickable or not
};

export default Thumb;
