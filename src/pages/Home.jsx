import React, {useEffect} from "react";
import { useContext } from 'react';
import Header from "../components/Header.jsx";
import Loading from "../UI/Loading.jsx";
import RepositoryList from "../components/RepositoryList.jsx";
import {AppContext} from "../contexts/AppContext.jsx";
import {getPageCount, getPagesArray} from "../utils/pages.js";
import Button from "../UI/Button.jsx";
// import "./styles/App.scss";

function Home() {
    // const { loading, error, data } = useQuery(GET_REPOSITORY);
    const { loading, data, setTotalPages,
        totalCount, first, totalPages, page, setPage,
        setAfter, after} = useContext(AppContext);

    // console.log('totalPages', totalPages);
    let pagesArray = getPagesArray(totalPages);
    // let isChangePage = false;
    // console.log('11111',data.search.pageInfo.endCursor);
    useEffect(() => {
        setTotalPages(getPageCount(totalCount, first));
    }, []);

    const changePage = (page) => {
        setPage(page);
        setAfter(data?.search.pageInfo.endCursor);
        console.log('2222',data.search.pageInfo.endCursor);
    }

    return (
        <div className='wrapper'>
            <Header/>

            {loading ? (
                <Loading size='50' />
            ) : (
                <RepositoryList data={data}/>
            )}

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

        </div>
    )
}

export default Home;