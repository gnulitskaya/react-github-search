import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setLocation} from "../store/actions/repoActions.js";

const SearchField = () => {
    let typingTimer;

    const location = useSelector((state) => state.location);
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        dispatch(setLocation(event.target.value));
        console.log('location', location);
    };

    const searchUsers = (e) => {
        clearTimeout(typingTimer);

        typingTimer = setTimeout(() => {
            // setSearchValue(e.target.value);
            dispatch(setLocation(`${e.target.value} location:${location}`))
        }, 600);
    };

    return (
        <div className="input">
            <input type='text' onChange={handleSearch} placeholder='Search' />
        </div>
    );
};

export default SearchField;