import {
  FETCH_USERS_FULFILLED, FETCH_USERS_REJECTED, FETCH_USERS_PENDING
} from "../action_types";
import users from "./usersReducer";

describe("users Reducer", () => {
  const initialState = {
    users: [],
    loading: false,
    error: false
  };

  it("returns the initial state correctly", () => {
    const reducer = users(undefined, {});

    expect(reducer).toEqual(initialState);
  });

  it(`handles ${FETCH_USERS_PENDING} as expected`, () => {
    const reducer = users(initialState, { type: FETCH_USERS_PENDING });

    expect(reducer).toEqual({...initialState, loading: true});
  });

  it(`handles ${FETCH_USERS_REJECTED} as expected`, () => {
    const reducer = users(initialState, { type: FETCH_USERS_REJECTED });
    expect(reducer).toEqual({...initialState, error: true});
  });

  it(`handles ${FETCH_USERS_FULFILLED} as expected`, () => {
    const reducer = users(initialState, {
      type: FETCH_USERS_FULFILLED,
      payload: { data: [{id: 1, name: "John Doe"}] }
    });

    expect(reducer).toEqual(
        {...initialState, users: [{ id: 1, name: "John Doe"}],
    });
  });
});
