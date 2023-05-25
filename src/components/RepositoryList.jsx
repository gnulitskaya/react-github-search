import React, {useEffect} from 'react';
import Repository from "./Repository.jsx";
import {setSearch} from "../store/actions/repoActions.js";
import {useDispatch} from "react-redux";

const RepositoryList = ({data}) => {
    console.log('repositories', data);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data.edges == null && data.edges.length <= 0)
        dispatch(setSearch(`user:gnulitskaya`));
    });

    return (
        <div className='repository-list'>
            { (data && data.edges.length > 0) ? (
                data.edges.map((rep, index) => <Repository key={index} rep={rep} />)
            ) : (
                <h1>No results!</h1>
            )}
        </div>
    );
};

export default RepositoryList;