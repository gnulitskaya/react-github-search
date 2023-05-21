import React from "react";
import { useContext } from 'react';
import Header from "../components/Header.jsx";
import Loading from "../UI/Loading.jsx";
import RepositoryList from "../components/RepositoryList.jsx";
import {AppContext} from "../contexts/AppContext.jsx";
// import "./styles/App.scss";

function Home() {
    // const { loading, error, data } = useQuery(GET_REPOSITORY);
    const { loading, data, fetchData } = useContext(AppContext);

    return (
        <div className='wrapper'>
            <Header/>

            {loading ? (
                <Loading size='50' />
            ) : (
                <RepositoryList data={data}/>
            )}

        </div>
    )
}

export default Home;