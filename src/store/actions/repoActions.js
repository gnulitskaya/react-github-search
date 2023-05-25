import {
    SET_REPOSITORIES,
    SET_ACTIVE_REPOSITORY,
    SET_SEARCH,
    SET_AFTER,
    SET_PAGE,
    SET_USER
} from '../types'

export const setRepositories = (repositories) => ({
    type: SET_REPOSITORIES,
    payload: repositories,
});

export const setRepositoryActive = (activeRep) => ({
    type: SET_ACTIVE_REPOSITORY,
    payload: activeRep,
});

export const setSearch = (search) => ({
    type: SET_SEARCH,
    payload: search,
});

export const setAfter = (after) => ({
    type: SET_AFTER,
    payload: after,
});

export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export const setPage = (page) => ({
    type: SET_PAGE,
    payload: page,
});