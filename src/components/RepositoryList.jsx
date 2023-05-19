import React from 'react';
import Repository from "./Repository.jsx";

const RepositoryList = ({data}) => {
    return (
        <div className='repository-list'>
            {data ? (
                data.user.repositories.edges.map((user, index) => <Repository key={index} rep={user} />)
            ) : (
                <h1>No results!</h1>
            )}
        </div>
    );
};

export default RepositoryList;