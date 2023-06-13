import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

// Image
import searchIcon from '../../images/search-icon.svg';

// Styles
import { Wrapper, Content } from "./SearchBar.styles";

/**
 * SearchBar component is a search input field for searching movies.
 * It accepts a callback function 'setSearchTerm' to handle the search term.
 */
const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState(""); // State to store the search input value
    const initial = useRef(true); // Ref to skip the initial useEffect

    useEffect(() => {
        // useEffect hook to handle the search term updates

        if (initial.current) {
            // Skip the initial effect (runs only on subsequent renders)
            initial.current = false;
            return;
        }

        // Set a timeout to update the search term after a delay of 500ms
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);

        // Clean up the timeout when the component unmounts or the search term changes
        return () => clearTimeout(timer);
    }, [setSearchTerm, state]);

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input
                    type='text'
                    placeholder="Search Movie"
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    );
};

SearchBar.propTypes = {
    setSearchTerm: PropTypes.func // Callback function to handle the search term
};

export default SearchBar;
