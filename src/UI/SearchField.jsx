import React, {useContext} from 'react';
import {AppContext} from "../contexts/AppContext.jsx";

const SearchField = () => {
    let typingTimer;

    // const {setLocation, currentCountry, setSearchValue} =
    //     useContext(AppContext);

    const searchUsers = (e) => {
        clearTimeout(typingTimer);

        typingTimer = setTimeout(() => {
            setSearchValue(e.target.value);
            setLocation(`${e.target.value} location:${currentCountry}`);
        }, 600);
    };

    return (
        <div className="input">
            <input type='text' onChange={searchUsers} placeholder='Search' />
        </div>
    );
};

export default SearchField;