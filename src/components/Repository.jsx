import React, {useContext} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {AppContext} from "../contexts/AppContext.jsx";

const Repository = (props) => {
    const rep = props.rep.node;
    const navigate = useNavigate();

    const openMoreInfo = () => {
        navigate(`/about/${rep.name}/${rep.owner.login}`);
    }

    return (
        <div className="repository-item">
            <div className="repository-item__header">
                <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" role="img"
                     viewBox="0 0 24 24" fill="none" stroke="#64ffda" strokeWidth="1" strokeLinecap="round"
                     strokeLinejoin="round" className="feather feather-folder"><title>Folder</title>
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <ul className="repository-item__links links-list">
                    <li className="links-list__item">
                        <a href="">
                            <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" role="img"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title>
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </li>
                    <li className="links-list__item">
                        <a target='_blank' href={rep.url}>
                            <svg width="25px" height="25px" role="img" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github"
                                 className="svg-inline--fa fa-github fa-w-16 fa-lg" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 496 512">
                                <path fill="currentColor"
                                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="repository-item__title" onClick={openMoreInfo}>{rep.name} </div>

            <div className="repository-item__bottom">
                <div className="repository-item__star">
                    <svg width='20px' role="img" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                         className="svg-inline--fa fa-star fa-w-18" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 576 512">
                        <path fill="currentColor"
                              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                    {rep.stargazerCount}</div>
                <div className="repository-item__data">{rep.pushedAt}</div>
            </div>

            {/*<div className="repository-item__owner owner-repository">*/}
            {/*    <div className="owner-repository-item__avatar"></div>*/}
            {/*    <div className="owner-repository-item__name"></div>*/}
            {/*</div>*/}

            {/*<ul className="repository-item__topics topics-list">*/}
            {/*    <li className="topics-list__item"></li>*/}
            {/*</ul>*/}

            {/*<div className="repository-item__description">*/}

            {/*</div>*/}
        </div>
    );
};

export default Repository;