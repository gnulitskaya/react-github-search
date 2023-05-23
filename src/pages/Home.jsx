import React, {useEffect, useState} from "react";
import { useContext } from 'react';
import Header from "../components/Header.jsx";
import Loading from "../UI/Loading.jsx";
import RepositoryList from "../components/RepositoryList.jsx";
import {AppContext} from "../contexts/AppContext.jsx";
import {getPageCount, getPagesArray, getPagesPagination} from "../utils/pages.js";
import Button from "../UI/Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import {GET_REPOSITORIES} from "../query/query.js";
import {setAfter, setPage, setRepositories} from "../store/actions/repoActions.js";
import {useQuery} from "@apollo/client";
// import "./styles/App.scss";

const Home = () => {

    // const [first, setFirst] = useState(10);
    // const [after, setAfter] = useState(null);
    // const [location, setLocation] = useState('location:russia');

    const dispatch = useDispatch();
    const repositories = useSelector((state) => state.repositories);
    const repositoryCount = useSelector((state) => state.repositoryCount);
    const first = useSelector((state) => state.first);
    const after = useSelector((state) => state.after);
    const location = useSelector((state) => state.location);
    const page = useSelector((state) => state.page);
    const endCursor = useSelector((state) => state.endCursor);

    // console.log('endCursor', endCursor)

    const { loading, error, data } = useQuery(GET_REPOSITORIES, {
        variables: { first, location, after },
        onCompleted: (data) => dispatch(setRepositories(data.search)),
    });

    // const { loading, data, page, fetchData, setAfter, first, setPage} = useContext(AppContext);
    // const endCursor = data?.search.pageInfo.endCursor;

    let pageNumberArray = getPagesArray(getPageCount(data?.repositoryCount, first));

    console.log('xssx', repositories)

    const handlePageClick = (cursor, number) => {
        dispatch(setAfter(cursor));
        dispatch(setPage(number));
    };

    console.log('repositories', repositories)

    return (
        <div className='wrapper'>
            <Header/>

            {loading ? (
                <Loading size='50' />
            ) : (
                <RepositoryList data={repositories} />
            )}

            {/*fetchData={fetchData}*/}

                <div className="pagination">
                    {pageNumberArray.map(number =>
                        <Button
                            onClick={() => handlePageClick(number === 1 ? null : endCursor, number)}
                            key={number}
                            className={page === number ? 'current' : ''}>
                            {number}
                        </Button>
                    )}
                </div>

        </div>
    )
}

export default Home;