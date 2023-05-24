import {
    SET_REPOSITORIES,
    SET_ACTIVE_REPOSITORY,
    SET_LOCATION,
    SET_AFTER,
    SET_PAGE,
    SAVE_DATA_TO_STORAGE
} from '../types'

export const setRepositories = (repositories) => ({
    type: SET_REPOSITORIES,
    payload: repositories,
});

export const setRepositoryActive = (activeRep) => ({
    type: SET_ACTIVE_REPOSITORY,
    payload: activeRep,
});

export const setLocation = (activeRep) => ({
    type: SET_LOCATION,
    payload: activeRep,
});

export const setAfter = (activeRep) => ({
    type: SET_AFTER,
    payload: activeRep,
});

export const setPage = (activeRep) => ({
    type: SET_PAGE,
    payload: activeRep,
});

export const saveDataToStorage = () => ({
    type: SAVE_DATA_TO_STORAGE,
});
