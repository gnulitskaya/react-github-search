import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../store/actions/repoActions.js";

const SearchField = () => {
    let typingTimer;

    const search = useSelector((state) => state.search);
    const dispatch = useDispatch();

    const searchUsers = (e) => {
        clearTimeout(typingTimer);

        typingTimer = setTimeout(() => {
            dispatch(setSearch(`name:${e.target.value}`))
        }, 600);
    };

    return (
        <div className="input">
            <input type='text' onChange={searchUsers}/>
        </div>
    );
};

export default SearchField;