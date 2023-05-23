import {SET_REPOSITORIES, SET_ACTIVE_REPOSITORY, SET_LOCATION, SET_FIRST, SET_AFTER, SET_PAGE } from '../types';

const initialState = {
    repositories: [],
    repositoryCount: null,
    activeRepository: null,
    location: 'location:russia',
    after: null,
    first: 10,
    page: 1
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPOSITORIES:
            return {
                ...state,
                repositories: action.payload,
            };
        case SET_ACTIVE_REPOSITORY:
            return {
                ...state,
                activeRepository: action.payload,
            };
        case SET_LOCATION:
            return {
                ...state,
                location: action.payload,
            };
        case SET_AFTER:
            return {
                ...state,
                after: action.payload,
            };
        case SET_FIRST:
            return {
                ...state,
                first: action.payload,
            };
        case SET_PAGE:
            return {
                ...state,
                page: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;