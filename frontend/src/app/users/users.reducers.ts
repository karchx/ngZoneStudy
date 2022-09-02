import { createReducer, on } from "@ngrx/store";
import { User } from "../core/models/user";
import { signup, signupSuccess } from "./users.actions";

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
  })
);
