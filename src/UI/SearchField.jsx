import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../store/actions/repoActions.js";

const SearchField = () => {
    let typingTimer;

    const search = useSelector((state) => state.search);
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        // dispatch(setSearch(`repository: ${event.target.value}`));
        console.log('search', search);

        clearTimeout(typingTimer);

        typingTimer = setTimeout(() => {
            // setSearchValue(e.target.value);
            let value = event.target.value;
            dispatch(setSearch(`search:${value}`))
        }, 600);
    };

    // const searchUsers = (e) => {
    //     clearTimeout(typingTimer);
    //
    //     typingTimer = setTimeout(() => {
    //         // setSearchValue(e.target.value);
    //         dispatch(setSearch(`${e.target.value} location:${search}`))
    //     }, 600);
    // };

    return (
        <div className="input">
            <input type='text' onChange={handleSearch} placeholder='Search' value={search} />
        </div>
    );
};

export default SearchField;