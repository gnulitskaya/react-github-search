import React from "react";
import { useContext } from 'react';
import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from "./query/query.js";

import "./styles/App.scss";
import Header from "./components/Header.jsx";
import {AppContext} from "./contexts/AppContext.jsx";
import RepositoryList from "./components/RepositoryList.jsx";
// import Repository from "./components/Repository.jsx";
// import RepositoryList from "./components/RepositoryList.jsx";

function App() {
    // const { loading, error, data } = useQuery(GET_REPOSITORY);
    const { loading, fetchData, data } = useContext(AppContext);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error : {error.message}</p>;
    // const { pinnedItems } = data.user;
    // console.log(data['repository']);
    if (data != null) {
        // for (let value of Object.values(data)) {
        //     alert(value); // John, затем 30
        // }
        console.log(data)
    }


    return (
        <div className='wrapper'>
            <Header/>
            {/*{data.repository.issues.edges}*/}
            {/*/!*{data}*!/*/}
            {/*{data != null ? data.repository.issues.edges.length : ''}*/}
            <RepositoryList data={data} />
        </div>
    )
}

export default App;