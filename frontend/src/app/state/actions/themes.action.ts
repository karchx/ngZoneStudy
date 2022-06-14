import { createAction, props } from "@ngrx/store";
import { Theme } from "../models/theme.model";

export const LoadThemes = "[Themes] load data";


export const loadThemes = createAction(
	LoadThemes,
	props<{ themes: Theme[] }>()
);

