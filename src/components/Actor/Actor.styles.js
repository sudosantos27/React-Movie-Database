import styled from "styled-components";

// Styles for the Actor component wrapper
export const Wrapper = styled.div`
  color: var(--white); /* Set the text color to white */
  background: var(--darkGrey); /* Set the background color to dark grey */
  border-radius: 20px; /* Apply border radius of 20px */
  padding: 5px; /* Apply padding of 5px */
  text-align: center; /* Center align the content */

  h3 {
    margin: 10px 0 0 0; /* Apply margin to the top of the heading */
  }

  p {
    margin: 5px 0; /* Apply margin to the top and bottom of the paragraphs */
  }
`;

// Styles for the Actor component image
export const Image = styled.img`
  display: block; /* Make the image a block element */
  width: 100%; /* Set the width to 100% */
  height: 200px; /* Set the height to 200px */
  object-fit: cover; /* Maintain aspect ratio and cover the container */
  border-radius: 15px; /* Apply border radius of 15px */
`;
