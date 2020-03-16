import React from 'react'


import {StyledHeader, StyledRMDBLogo, StyledTMDBLogo} from '../styles'

//import NewLogo from '../images/...'       *Нарисовать логотип* 

const Header = () => {
    return(
        <StyledHeader>
            <div className='header-content'>
                <h2>NewLogo_IMG</h2>   
                <h2>TmDb</h2>
                <StyledRMDBLogo/>
                <StyledTMDBLogo/>
            </div>
        </StyledHeader>
    )
};

export default Header
