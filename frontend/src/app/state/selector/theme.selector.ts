import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ThemeState } from "../models/theme.model";

export const selectThemesFeature = (state: AppState) => state.listThemes;

export const selectThemes = createSelector(
  selectThemesFeature,
  (state: ThemeState) => state.themes
);

export const selectLoading = createSelector(
  selectThemesFeature,
  (state: ThemeState) => state.loading
);
