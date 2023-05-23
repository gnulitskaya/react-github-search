import React from 'react';
import Repository from "./Repository.jsx";

const RepositoryList = ({data, fetchData}) => {
    return (
        <div className='repository-list'>
            {data ? (
                data.search.edges.map((rep, index) => <Repository key={index} rep={rep} />)
            ) : (
                <h1>No results!</h1>
            )}
        </div>
    );
};

export default RepositoryList;