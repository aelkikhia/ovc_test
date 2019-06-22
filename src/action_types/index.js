import { ActionType } from 'redux-promise-middleware';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_PENDING = `${FETCH_USERS}_${ActionType.Pending}`;
export const FETCH_USERS_FULFILLED = `${FETCH_USERS}_${ActionType.Fulfilled}`;
export const FETCH_USERS_REJECTED = `${FETCH_USERS}_${ActionType.Rejected}`;