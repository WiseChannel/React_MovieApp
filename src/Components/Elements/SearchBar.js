import React,{ useState, useRef } from 'react'

import FontAwesome from 'react-fontawesome'
import {StyledSearchBar, StyledSearchBarContent} from '../styles/StyledSearchBar'
import PropTypes from 'prop-types'
import Navigation from "./Navigation";

//movie search bar components
const SearchBar = ({ callback }) => {

    const [state, setState] = useState('')
    const timeOut = useRef(null)

    const doSearch = e => {
        const { value } = e.target

        clearTimeout(timeOut.current)
        setState(value)

        timeOut.current = setTimeout(() => {
            callback(value)

        }, 500)
    }

    return (
        <StyledSearchBar>
            <StyledSearchBarContent>
                <FontAwesome
                    className="fa-search"
                    name="search"
                    size="2x"
                />
                <input
                    type="text"
                    placeholder="Search Movie"
                    onChange={doSearch}
                    value={state}
                />
            </StyledSearchBarContent>
        </StyledSearchBar>
    )
};

//checking propTypes input parameters
SearchBar.propTypes = {
    callback: PropTypes.func
}

export default SearchBar
