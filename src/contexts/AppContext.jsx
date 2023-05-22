import { createContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import {GET_PAGES, GET_REPOSITORIES, GET_REPOSITORY} from "../query/query.js";
import {getPageCount} from "../utils/pages.js";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // const first = 10;
    const [first, setFirst] = useState(2);
    const [firstPage, setFirstPage] = useState(2);

    const [location, setLocation] = useState('location:russia');
    const [currentCountry, setCurrentCountry] = useState('russia');
    const [searchValue, setSearchValue] = useState('');

    const [after, setAfter] = useState('Y3Vyc29yOjE=');
    const [page, setPage] = useState(1);

    const [totalCount, setTotalCount] = useState(0);

    const [owner, setOwner] = useState('');
    const [name, setNameRepository] = useState('');

    // const [pageNumber, setPageNumber] = useState(2);

    const { loading, data, fetchMore } = useQuery(GET_REPOSITORIES, {
        variables: { first, location, after }
    });

    const resp = useQuery(GET_REPOSITORY, {
        variables: { name, owner }
    });

    const getPageNumber = useQuery(GET_PAGES, {
        variables: { firstPage, location }
    });

    const fetchData = () => {
        const { endCursor } = data.search.pageInfo;

        fetchMore({
            variables: { endCursor: endCursor },
        });
    };

    // if (data != null) {
    //     // for (let value of Object.values(data)) {
    //     //     alert(value); // John, затем 30
    //     // }
    //     console.log(data)
    // }
    // console.log('searchValue', searchValue);

    return (
        <AppContext.Provider
            value={{
                loading,
                data,
                fetchData,
                currentCountry,
                setCurrentCountry,
                setLocation,
                searchValue,
                setSearchValue,
                setOwner,
                setNameRepository,
                after,
                setAfter,
                resp,
                page,
                setPage,
                first,
                totalCount,
                setTotalCount,
                getPageNumber,
                firstPage,
                setFirstPage
            }}
        >
            { children }
        </AppContext.Provider>
    );
};
