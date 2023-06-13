import React from "react";
import { Link } from "react-router-dom";

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

/**
 * Header component displays the header of the application.
 */
const Header = () => (
    <Wrapper>
        <Content>
            {/* Link to home page */}
            <Link to='/'>
                <LogoImg src={RMDBLogo} alt='rmdb-logo' />
            </Link>
            {/* TMDB logo */}
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
);

export default Header;
