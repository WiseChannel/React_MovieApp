import React from 'react'

import { StyledHeader } from '../styles/StyledHeader'
import { Link } from '@reach/router';

//import NewLogo from '../images/...'       *Нарисовать логотип*

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
