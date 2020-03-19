import React from 'react'

import {StyledHeader } from '../styles/StyledHeader'

//import NewLogo from '../images/...'       *Нарисовать логотип* 

const Header = () => {
    return(
        <StyledHeader>
            <div className='header-content'>
                <h2>React Movie</h2>   
                <h2>WiseChannel</h2>
            </div>
        </StyledHeader>
    )
};

export default Header
