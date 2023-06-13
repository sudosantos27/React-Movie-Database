import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper, Content } from "./Grid.styles";

/**
 * Grid component displays a grid layout with a header and content.
 * @param {string} header - The header text.
 * @param {React.ReactNode} children - The content to be rendered inside the grid.
 */
const Grid = ({ header, children }) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
);

// Prop types for type checking and documentation
Grid.propTypes = {
    header: PropTypes.string
};

export default Grid;
