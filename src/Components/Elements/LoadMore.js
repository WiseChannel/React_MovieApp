import React from 'react';

import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn';
import PropTypes from 'prop-types'

//Download component that serves as a button and raises a new event
const LoadMoreBtn = ({ text, callback }) => (
  <StyledLoadMoreBtn type="button" onClick={callback}>
    {text}
  </StyledLoadMoreBtn>
);

//checking propTypes input parameters
LoadMoreBtn.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func
}

export default LoadMoreBtn;
