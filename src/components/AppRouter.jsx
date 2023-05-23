import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About.jsx";
import Home from "../pages/Home.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about/:id" element={<About />}/>
        </Routes>
    );
};

export default AppRouter;