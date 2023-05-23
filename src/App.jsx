import React from "react";
import "./styles/App.scss";
import {BrowserRouter, Link, Router} from "react-router-dom";
import {AppProvider} from "./contexts/AppContext.jsx";
import AppRouter from "./components/AppRouter.jsx";

function App() {

    return (

        <div>
            <AppRouter/>
        </div>

    )
}

export default App;