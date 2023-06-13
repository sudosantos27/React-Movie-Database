import styled from "styled-components";

// Styles for the BreadCrumb component wrapper
export const Wrapper = styled.div`
  display: flex; /* Display the content as a flex container */
  align-items: center; /* Center align the items vertically */
  justify-content: center; /* Center align the items horizontally */
  width: 100%; /* Set the width to 100% */
  height: 70px; /* Set the height to 70px */
  background: var(--medGrey); /* Set the background color to medium grey */
  color: var(--white); /* Set the text color to white */
`;

// Styles for the BreadCrumb component content
export const Content = styled.div`
  display: flex; /* Display the content as a flex container */
  width: 100%; /* Set the width to 100% */
  max-width: var(--maxWidth); /* Set the maximum width using a CSS variable */
  padding: 0 20px; /* Apply horizontal padding of 0px and vertical padding of 20px */

  span {
    font-size: var(--fontMed); /* Set the font size using a CSS variable */
    color: var(--white); /* Set the text color to white */
    padding-right: 10px; /* Apply right padding of 10px */

    @media screen and (max-width: 786px) {
      font-size: var(--fontSmall); /* Set a smaller font size for smaller screens */
    }
  }
`;
