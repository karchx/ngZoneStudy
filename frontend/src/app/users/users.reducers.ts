import { createFeature, createReducer, on } from "@ngrx/store";
import { User } from "../core/models/user";
import { authActions } from "./users.actions";

export interface AuthState {
  loggedIn: boolean;
  user: User;
  token: string;
  status: Status;
}

export enum Status {
  INIT = "INIT",
  IN_PROGRESS = "IN_PROGRESS"
}

export const authInitialState: AuthState = {
  loggedIn: false,
  status: Status.INIT,
  user: {
    username: "",
    email: "",
    password: ""
  },
  token: ""
};

export const authFeature = createFeature({
  name: "auth",
  reducer: createReducer(
    authInitialState,
    on(authActions.registerSuccess, (state, action) => ({
      ...state,
      loggedIn: true,
      status: Status.INIT,
      user: action.user,
      token: action.token || ""
    })),
    on(authActions.registerFailure, state => ({
      ...state,
      status: Status.INIT
    }))
  )
});
