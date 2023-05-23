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

    const { loading, data, page, fetchData, setAfter, first, setPage} = useContext(AppContext);
    const endCursor = data?.search.pageInfo.endCursor;

    let pageNumberArray = getPagesArray(getPageCount(data?.search.repositoryCount, first));

    const handlePageClick = (cursor, number) => {
        setAfter(cursor);
        setPage(number);
    };

    // const changePage = (page) => {
    //     //fetchData();
    //     console.log(data)
    //     setPage(page);
    //     // setFirstPage(getPagesPagination(first, page)); // 16
    //     setAfter(data?.search.pageInfo.endCursor);
    // }

    // useEffect(() => {
    //
    //     // setTotalPages(getPageCount(totalCount, first));
    //     // pagesArray = getPagesArray(totalPages);
    //     // console.log('totalCount', totalCount)
    //     // console.log('pagesArray', pagesArray, totalPages)
    //     // setTotalCount(data?.search.repositoryCount);
    //
    // }, []);

    // const pageNumbers = [];
    //
    // for (let i = 1; i <= 10; i++) {
    //     pageNumbers.push(i);
    // }
    // console.log('pageNumbers', pageNumbers)

    return (
        <div className='wrapper'>
            <Header/>

            {loading ? (
                <Loading size='50' />
            ) : (
                <RepositoryList data={data} fetchData={fetchData}/>
            )}

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