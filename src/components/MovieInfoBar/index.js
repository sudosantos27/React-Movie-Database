import React from "react";
import PropTypes from "prop-types";

// Helpers
import { calcTime, convertMoney } from "../../helpers";

// Styles
import { Wrapper, Content } from "./MovieInfoBar.styles";

/**
 * MovieInfoBar component displays movie information including running time, budget, and revenue.
 */
const MovieInfoBar = ({ time, budget, revenue }) => (
    <Wrapper>
        <Content>
            {/* Running Time */}
            <div className="column">
                <p>Running Time: {calcTime(time)}</p>
            </div>
            {/* Budget */}
            <div className="column">
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            {/* Revenue */}
            <div className="column">
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
);

MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
};

export default MovieInfoBar;
