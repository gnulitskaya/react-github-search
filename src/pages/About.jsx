import React, {useContext, useEffect, useState} from 'react';
// import {AppContext} from "../contexts/AppContext.jsx";
import Loading from "../UI/Loading.jsx";
import Time from 'react-time-format'
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useQuery} from "@apollo/client";
import {GET_REPOSITORIES} from "../query/query.js";
import {setRepositories, setRepositoryActive} from "../store/actions/repoActions.js";

const About = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const activeRepository = useSelector((state) => state.activeRepository);

    const first = useSelector((state) => state.first);
    const after = useSelector((state) => state.after);
    const location = useSelector((state) => state.location);

    const { loading, error, data } = useQuery(GET_REPOSITORIES, {
        variables: { first, location, after },
        onCompleted: (data) => dispatch(setRepositoryActive(
            data.search.edges.find(rep => rep.node.id === params.id).node)),
    });

    console.log('id', data.search.edges.find(rep => rep.node.id === params.id).node);
    const results = [];

    activeRepository?.languages.edges.forEach((item, index) => {
        results.push(
            <li className="list-info__item" key={item.node.id}>{item.node.name}</li>
        );
    });

    return (
        <div className='wrapper'>
            <Link to="/">BACK</Link>

            {loading ? (
                <Loading size='50' />
            ) : (

                <div>
                    <h1>{activeRepository?.name}</h1>
                    <div className="repository-info">

                        <img src={activeRepository?.owner.avatarUrl} alt=""/>
                        <div className="repository-info__header header-info">
                            <h2 className="header-info__title">
                                <a target="_blank" href={activeRepository?.owner.url}>
                                    { activeRepository?.owner.login }</a>
                            </h2>
                            <div className="header-info__star">
                                <svg width='20px' role="img" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                     className="svg-inline--fa fa-star fa-w-18" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 576 512">
                                    <path fill="currentColor"
                                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                                {activeRepository?.stargazerCount}</div>
                            <div className="header-info__data">
                                <Time value={activeRepository?.pushedAt} format="YYYY-MM-DD" />
                            </div>

                            <ul className="header-info__list list-info">
                                {results}
                            </ul>
                            <p className="repository-info__text">
                                {activeRepository?.description}
                            </p>
                        </div>

                    </div>
                </div>
            )}
        </div>

    );
};

export default About;