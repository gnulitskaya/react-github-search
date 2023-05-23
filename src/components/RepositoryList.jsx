import React from 'react';
import Repository from "./Repository.jsx";

const RepositoryList = ({data}) => {
    console.log('repositories', data)
    return (
        <div className='repository-list'>
            { (data && data.length > 0) ? (
                data.map((rep, index) => <Repository key={index} rep={rep} />)
            ) : (
                <h1>No results!</h1>
            )}
        </div>
    );
};

export default RepositoryList;