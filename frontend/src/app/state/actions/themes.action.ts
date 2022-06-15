import { createAction, props } from "@ngrx/store";
import { Theme } from "../models/theme.model";

export const LoadThemes = "[Themes List] load themes";
export const LoadedThemes = "[Themes List] loaded success";

export const loadThemes = createAction(LoadThemes);

export const loadedThemes = createAction(LoadedThemes, props<{ themes: Theme[] }>());
