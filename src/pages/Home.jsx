import React from "react";
import Header from "../components/Header.jsx";
import Loading from "../UI/Loading.jsx";
import RepositoryList from "../components/RepositoryList.jsx";
import {getPageCount, getPagesArray} from "../utils/pages.js";
import Button from "../UI/Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import {GET_REPOSITORIES} from "../query/query.js";
import {setAfter, setPage, setRepositories} from "../store/actions/repoActions.js";
import {useQuery} from "@apollo/client";

const Home = () => {

    const dispatch = useDispatch();
    const repositories = useSelector((state) => state.repositories);
    const first = useSelector((state) => state.first);
    const after = useSelector((state) => state.after);
    const location = useSelector((state) => state.location);
    const page = useSelector((state) => state.page);

    const { loading, error, data } =
        useQuery(GET_REPOSITORIES, {
        variables: { first, location, after },
        onCompleted: (data) =>
            dispatch(setRepositories(data.search)),
    });

    console.log('data', data)

    let pageNumberArray = getPagesArray(getPageCount(data?.search.repositoryCount, first));
    const endCursor = data?.search.pageInfo.endCursor;

    const handlePageClick = (cursor, number) => {
        dispatch(setAfter(cursor));
        dispatch(setPage(number));
    };

    return (
        <div className='wrapper'>
            <Header/>

            {loading ? (
                <Loading size='50' />
            ) : (
                <RepositoryList data={repositories} />
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