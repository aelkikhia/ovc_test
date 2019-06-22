// import _ from 'lodash';
import {
    FETCH_USERS_FULFILLED,
    FETCH_USERS_PENDING,
    FETCH_USERS_REJECTED } from "../action_types";

const INITIAL_STATE = { users: [], loading: false, error: false };

export default (state = INITIAL_STATE, {type, payload}) => {
    switch(type) {
        case FETCH_USERS_FULFILLED:
            return { ...state, users: payload.data, loading: false };
        case FETCH_USERS_PENDING:
            return { ...state, loading: true };
        case FETCH_USERS_REJECTED:
            return { ...state, loading: false, error: true };
        default:
            return state
    }
}