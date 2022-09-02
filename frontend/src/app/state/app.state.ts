import { ActionReducerMap } from "@ngrx/store";
import { ThemeState } from "./models/theme.model";
import { themeReducer } from "./reducers/theme.reducer";
import * as users from "../users/users.reducers";

export interface AppState {
  listThemes: ThemeState;
  users: users.State;
  //notify:
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  listThemes: themeReducer,
  users: users.userReducer
};
