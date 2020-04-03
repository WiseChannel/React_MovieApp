import React from 'react'

//import components
import { StyledHeader } from '../styles/StyledHeader'
import { Link } from '@reach/router';

//Header component returns a link to the router of the main page and the name of the author
const Header = () => {
    return(
        <StyledHeader>
            <div className='header-content'>
                <Link to="/">
                    <h2>React Movie</h2>
                </Link>
                <h2>WiseChannel</h2>
            </div>
        </StyledHeader>
    )
};

export default Header
