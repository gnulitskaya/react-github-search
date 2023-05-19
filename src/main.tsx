import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";

import "./styles/index.css";
import App from "./App.jsx";
import { client } from "./client/client.js";
import {AppProvider} from "./contexts/AppContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ApolloProvider client={client}>
        <AppProvider>
            <App />
        </AppProvider>
    </ApolloProvider>
);