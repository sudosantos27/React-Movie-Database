import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Styles
import { Wrapper, Content } from "./BreadCrumb.styles";

/**
 * BreadCrumb component displays a breadcrumb navigation for the movie pages.
 * It consists of a link to the home page and the movie title.
 *
 * @param {string} movieTitle - The title of the movie.
 */
const BreadCrumb = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

BreadCrumb.propTypes = {
  movieTitle: PropTypes.string, // Prop type for the movie title
};

export default BreadCrumb;
