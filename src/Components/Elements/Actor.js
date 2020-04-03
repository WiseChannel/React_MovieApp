import React from 'react'

//import Image
import NoImage from '../images/no_image.jpg'

//import Components
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../Config/config";
import PropTypes from 'prop-types'

//import Style
import { StyledActor } from "../styles/StyledActor";

//Component of the actor that contains the name, character and img
const Actor = ({ actor }) => (
    <StyledActor>
        <img src={
            actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
             alt='actorthumb'
        />
        <span className='actor-name'>{actor.name}</span>
        <span className='actor-character'>{actor.character}</span>
    </StyledActor>
);

Actor.proppTypes = {
    actor: PropTypes.object
}

export default Actor
