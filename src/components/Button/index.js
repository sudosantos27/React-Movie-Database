import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper } from "./Button.styles";

/**
 * Button component.
 * Renders a styled button with provided text and callback function.
 * @param {string} text - The text to be displayed on the button.
 * @param {function} callback - The callback function to be executed when the button is clicked.
 */
const Button = ({ text, callback }) => (
  <Wrapper type="button" onClick={callback}>
    {text}
  </Wrapper>
);

// Prop types for the Button component
Button.propTypes = {
  text: PropTypes.string, // The text prop should be a string.
  callback: PropTypes.func, // The callback prop should be a function.
};

export default Button;
