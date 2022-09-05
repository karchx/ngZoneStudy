import { ActionReducerMap } from "@ngrx/store";
import { ThemeState } from "./models/theme.model";
import { themeReducer } from "./reducers/theme.reducer";
import * as users from "../users/users.reducers";

export interface AppState {
  listThemes: ThemeState;
  auth: users.AuthState;
  //notify:
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  listThemes: themeReducer,
  auth: users.authFeature.reducer
};
