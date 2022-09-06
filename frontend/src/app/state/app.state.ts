import { ActionReducerMap } from "@ngrx/store";
import * as users from "../users/users.reducers";

export interface AppState {
  auth: users.AuthState;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  auth: users.authFeature.reducer
};
