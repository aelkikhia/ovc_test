import axios from 'axios';
import { FETCH_USERS } from "../action_types";

const baseURL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = () => dispatch => {
    return dispatch({
        type: FETCH_USERS,
        payload: axios.get(`${baseURL}/users`)
    });
};