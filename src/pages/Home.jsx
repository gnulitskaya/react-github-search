import React, {useEffect, useState} from "react";
import { useContext } from 'react';
import Header from "../components/Header.jsx";
import Loading from "../UI/Loading.jsx";
import RepositoryList from "../components/RepositoryList.jsx";
import {AppContext} from "../contexts/AppContext.jsx";
import {getPageCount, getPagesArray, getPagesPagination} from "../utils/pages.js";
import Button from "../UI/Button.jsx";
// import "./styles/App.scss";

const Home = () => {
    // const { loading, error, data } = useQuery(GET_REPOSITORY);
    const [totalPages, setTotalPages] = useState(0);

    const { loading, data, setTotalCount,
        totalCount, first, page, setPage,
        setAfter, after, getPageNumber, setFirstPage} = useContext(AppContext);

    console.log('totalPages', getPageNumber);
    let pagesArray = [1];
    // let isChangePage = false;

    const changePage = (page) => {
        // setPage(page);
        // setFirstPage(getPagesPagination(first, page)); // 16
        // setAfter(getPageNumber?.data.search.pageInfo.endCursor);
    }

    useEffect(() => {

        setTotalPages(getPageCount(totalCount, first));
        pagesArray = getPagesArray(totalPages);
        console.log('totalCount', totalCount)
        console.log('pagesArray', pagesArray, totalPages)
        setTotalCount(data?.search.repositoryCount);

    }, []);

    return (
        <div className='wrapper'>
            <Header/>

            {loading ? (
                <Loading size='50' />
            ) : (
                <RepositoryList data={data}/>
            )}

            {getPageNumber.loading ? (
                ''
            ) : (
                <div className="pagination">
                    {pagesArray.map(p =>
                        <Button
                            onClick={() => changePage(p)}
                            key={p}
                            className={page === p ? 'current' : ''}>
                            {p}
                        </Button>
                    )}
                </div>
            )}
        </div>
    )
}

export default Home;