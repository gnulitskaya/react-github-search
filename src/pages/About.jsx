import React, {useContext} from 'react';
import {AppContext} from "../contexts/AppContext.jsx";

const About = () => {

    const { loading2, data2 } = useContext(AppContext);
    console.log('data2', data2);
    return (
        <div>
            about
        </div>
    );
};

export default About;