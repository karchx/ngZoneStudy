import { createReducer, createSelector, on } from "@ngrx/store";
import { User } from "../core/models/user";
import { AppState } from "../state/app.state";
import { signup, signupError, signupSuccess } from "./users.actions";

export interface State {
  user?: User;
  error?: string;
}

const initialState: State = {};

export const userReducer = createReducer(
  initialState,
  on(signup, state => {
    return { ...state, user: undefined };
  }),
  on(signupSuccess, (state, action) => {
    return { ...state, user: action.user };
  }),
  on(signupError, (state, action) => {
    return { ...state, error: action.error.error.message };
  })
);

// TODO: move file .selectors
export const getSignUpErrorFeature = (state: AppState) => state.users;

export const getSignUpError = createSelector(
  getSignUpErrorFeature,
  (state: State) => state.error
);
