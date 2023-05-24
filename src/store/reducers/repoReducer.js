import {
    SET_REPOSITORIES,
    SET_ACTIVE_REPOSITORY,
    SET_LOCATION,
    SET_AFTER,
    SET_PAGE,
    SAVE_DATA_TO_STORAGE} from '../types';

const initialState = {
    data: [],
    repositories: [],
    repositoryCount: null,
    activeRepository: null,
    location: 'location:all',
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
        case SET_PAGE:
            return {
                ...state,
                page: action.payload,
            };
        case SAVE_DATA_TO_STORAGE:
            localStorage.setItem('data', JSON.stringify(state.data));
            return state;
        default:
            return state;
    }
};

export default rootReducer;