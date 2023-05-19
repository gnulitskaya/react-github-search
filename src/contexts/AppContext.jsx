import { createContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import {GET_REPOSITORY} from "../query/query.js";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // const first = 20;
    // const [location, setLocation] = useState('location:angola');
    // const [currentCountry, setCurrentCountry] = useState('angola');
    // const [searchValue, setSearchValue] = useState('');

    const { loading, error, data } = useQuery(GET_REPOSITORY);

    // const fetchData = () => {
    //     const { endCursor } = data.search.pageInfo;
    //     fetchMore({
    //         variables: { endCursor: endCursor },
    //     });
    // };
    if (data != null) {
        // for (let value of Object.values(data)) {
        //     alert(value); // John, затем 30
        // }
        console.log(data)
    }


    return (
        <AppContext.Provider
            value={{
                loading,
                error,
                data,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
