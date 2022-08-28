import { createReducer, on } from "@ngrx/store";
import { User } from "../core/models/user";
import { signup, signupError, signupSuccess } from "./users.actions";

export interface State {
  user?: User;
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
    return { ...state, error: action.error.error.message }
  }),
);
