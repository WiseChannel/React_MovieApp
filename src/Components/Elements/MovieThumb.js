import React from 'react'

//import components
import { StyledMovieThumb } from '../styles/StyledMovieThumb'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'
import MovieInfoBar from "./MovieInfoBar";

//Takes a photo and an ID film at the entrance
const MovieThumb = ({ image, movieId, clickable }) => (
    <StyledMovieThumb>
      {clickable ? (
          <Link to={`/${movieId}`}>
              <img className="clickable" src={image} alt="moviethumb" />
          </Link>
      ) : (
        <img src={image} alt="moviethumb" />
      )}
    </StyledMovieThumb>
  );

//checking propTypes input parameters
MovieThumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool
}

export default MovieThumb
