import { createContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import {GET_REPOSITORIES, GET_REPOSITORY} from "../query/query.js";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const first = 10;
    const [location, setLocation] = useState('location:russia');
    const [currentCountry, setCurrentCountry] = useState('russia');
    const [searchValue, setSearchValue] = useState('');
    const [after, setAfter] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const [owner, setOwner] = useState('');
    const [name, setNameRepository] = useState('');

    const { loading, data, fetchMore } = useQuery(GET_REPOSITORIES, {
        variables: { first, location }
    });

    const resp = useQuery(GET_REPOSITORY, {
        variables: { name, owner }
    });

    console.log('data2', resp);

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
                resp
            }}
        >
            { children }
        </AppContext.Provider>
    );
};
