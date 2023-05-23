import React, {useContext} from 'react';
import {AppContext} from "../contexts/AppContext.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setLocation, setRepositories} from "../store/actions/repoActions.js";
import {useQuery} from "@apollo/client";
import {GET_REPOSITORIES} from "../query/query.js";

const SearchField = () => {
    let typingTimer;

    // const {setLocation, currentCountry, setSearchValue} =
    //     useContext(AppContext);

    // const first = useSelector((state) => state.first);
    // const after = useSelector((state) => state.after);
    const location = useSelector((state) => state.location);
    const dispatch = useDispatch();

    // const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    //     variables: { first, location, after },
    //     onCompleted: (data) => dispatch(setRepositories(data.search.edges)),
    // });

    const handleSearch = (event) => {
        dispatch(setLocation(event.target.value));
        console.log('location', location);
    };

    const searchUsers = (e) => {
        clearTimeout(typingTimer);

        typingTimer = setTimeout(() => {
            // setSearchValue(e.target.value);
            // useQuery(GET_REPOSITORIES, {
            //     variables: { first, location, after },
            //     onCompleted: (data) => dispatch(setRepositories(data.search.edges)),
            // });
            dispatch(setLocation(`${e.target.value} location:${location}`))

            // setLocation();
        }, 600);
    };

    return (
        <div className="input">
            <input type='text' onChange={handleSearch} placeholder='Search' />
        </div>
    );
};

export default SearchField;