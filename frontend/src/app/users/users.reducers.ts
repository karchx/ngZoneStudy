import { createReducer, createSelector, on } from "@ngrx/store";
import { User } from "../core/models/user";
import { AppState } from "../state/app.state";
import { signup, signupSuccess } from "./users.actions";

export interface State {
  user?: User;
  error?: string;
  authenticated: boolean;
}

const initialState: State = {
  authenticated: false
};

export const userReducer = createReducer(
  initialState,
  on(signup, state => {
    return { ...state, user: undefined, authenticated: false };
  }),
  on(signupSuccess, (state, action) => {
    console.log(action.user);
    return { ...state, user: action.user, authenticated: action.authenticated };
  })
);

export const isAuthenticated = createSelector(
  (state: AppState) => state.users,
  (state: State) => state.authenticated
);
