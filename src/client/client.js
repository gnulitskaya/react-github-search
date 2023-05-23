import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
    const token = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token}`,
        },
    };
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
});