import React from 'react'
import styles from 'styled-components'

import {StyledHeader } from '../styles/StyledHeader'

//import NewLogo from '../images/...'       *Нарисовать логотип* 

const Header = () => {
    return(
        <StyledHeader>
            <div className='header-content'>
                <h2>NewLogo_IMG</h2>   
                <h2>TmDb</h2>
            </div>
        </StyledHeader>
    )
};

export default Header
