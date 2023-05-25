import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import "./styles/index.scss";
import App from "./App.jsx";
import { client } from "./client/client.js";
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./store/reducers/repoReducer.js";
import {loadFromLocalStorage, saveToLocalStorage} from "./utils/localStorage.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(rootReducer, loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));

root.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>
    </Provider>
);