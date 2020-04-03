import React from 'react'

import { Link } from "@reach/router";
import { StyledNavigation } from "../styles/StyledNavigation";
import PropTypes from 'prop-types'
import MovieThumb from "./MovieThumb";

//Navigation component inside the information component
const Navigation = ({ movie }) => (
    <StyledNavigation>
        <div className="navigation-content">
            <Link to='/'>
                <p>Home</p>
            </Link>
            <p>|</p>
            <p>{movie}</p>
        </div>
    </StyledNavigation>
);

//checking propTypes input parameters
Navigation.propTypes = {
    movie: PropTypes.string
}

export default Navigation
