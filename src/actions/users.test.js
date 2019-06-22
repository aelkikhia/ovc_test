import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { fetchUsers } from "./users";
import {
    FETCH_USERS, FETCH_USERS_REJECTED, FETCH_USERS_PENDING, FETCH_USERS_FULFILLED
} from "../action_types";

const GENERIC_ERROR = "Remember that head explosion thing in the movie Scanners... not quite so bad";

const mockStore = configureMockStore([thunk, promise]);

describe("User Actions", () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            users: {}
        });
    });

    describe("fetchUsers action creator", () => {
        it(`dispatches ${FETCH_USERS} action and returns data on success`, async () => {
            mockAxios.get.mockImplementationOnce(() =>
                Promise.resolve({
                    data: [{ id: 1, name: "John Doe" }]
                })
            );

            await store.dispatch(fetchUsers());
            const actions = store.getActions();
            // [ { type: 'GET_USERS_PENDING' },
            //   { type: 'GET_USERS_FULFILLED', payload: { data: [Array] } }
            // ]

            expect.assertions(3);
            expect(actions[0].type).toEqual(FETCH_USERS_PENDING);
            expect(actions[1].type).toEqual(FETCH_USERS_FULFILLED);
            expect(actions[1].payload.data[0].name).toEqual("John Doe");
        });

        it(`tests ${FETCH_USERS} action and that returns an error`, async () => {
            mockAxios.get.mockImplementationOnce(() =>
                Promise.reject({
                    error: GENERIC_ERROR
                })
            );

            try {
                await store.dispatch(fetchUsers());
            } catch {
                const actions = store.getActions();

                expect.assertions(3);
                expect(actions[0].type).toEqual(FETCH_USERS_PENDING);
                expect(actions[1].type).toEqual(FETCH_USERS_REJECTED);
                expect(actions[1].payload.error).toEqual(GENERIC_ERROR);
            }
        });
    });
});
