import { ActionReducerMap } from "@ngrx/store";
import { ThemeState } from "./models/theme.model";
import { themeReducer } from "./reducers/theme.reducer";

export interface AppState {
  listThemes: ThemeState;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  listThemes: themeReducer
};
