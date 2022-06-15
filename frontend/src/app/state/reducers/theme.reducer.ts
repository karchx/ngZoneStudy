import { createReducer, on } from "@ngrx/store";
import { loadedThemes, loadThemes } from "../actions/themes.action";
import { ThemeState } from "../models/theme.model";

const initialState: ThemeState = {
  loading: false,
  themes: []
};

export const themeReducer = createReducer(
  initialState,
  on(loadThemes, state => {
    return { ...state, loading: true };
  }),
  on(loadedThemes, (state, action) => {
    return { ...state, loading: false, themes: action.themes };
  })
);
