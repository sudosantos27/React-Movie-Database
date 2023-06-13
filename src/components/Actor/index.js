import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper, Image } from "./Actor.styles";

/**
 * Actor component represents an individual actor in the movie.
 * It displays the actor's image, name, and character name.
 */
const Actor = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} alt="actor-thumb" />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

// Define prop types for the Actor component
Actor.propTypes = {
  name: PropTypes.string, // The name of the actor (string)
  character: PropTypes.string, // The character name played by the actor (string)
  imageUrl: PropTypes.string, // The URL of the actor's image (string)
};

export default Actor;
