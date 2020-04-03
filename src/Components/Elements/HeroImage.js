import React from 'react'

import { StyledHeroImage } from '../styles/StyledHeroImage'
import PropTypes from 'prop-types'

//Component of the hero that serves as a style wrapper for the title and text
const HeroImage = ({ image, title, text} ) => {
    return (
        <StyledHeroImage image={image}>
            <div className='heroimage-content'>
                <div className='heroimage-text'>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
            </div>
        </StyledHeroImage>

    )
};

//checking input parameters
HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}

export default HeroImage
