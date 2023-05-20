import React from 'react';
import SearchField from "../UI/SearchField.jsx";

const Header = () => {
    return (
        <div className="header-content">
            <div className="content">
                <h1>The World on GitHub</h1>
                <p>Search repositories from anywhere in the world on GitHub</p>
                <div className="search-field">
                    <SearchField />
                </div>
                {/*<img src="img/undraw_version_control_re_mg66.svg" alt="">*/}
                </div>
        </div>
    );
};

export default Header;