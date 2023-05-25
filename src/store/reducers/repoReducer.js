import {
    SET_REPOSITORIES,
    SET_ACTIVE_REPOSITORY,
    SET_SEARCH,
    SET_AFTER,
    SET_PAGE,
    SET_USER
} from '../types';

const initialState = {
    user: null,
    repositories: [],
    repositoryCount: null,
    activeRepository: null,
    search: '',
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
        case SET_SEARCH:
            return {
                ...state,
                search: action.payload,
            };
        case SET_AFTER:
            return {
                ...state,
                after: action.payload,
            };
        case SET_PAGE:
            return {
                ...state,
                page: action.payload,
            };
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;