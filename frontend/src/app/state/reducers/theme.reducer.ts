import { createReducer, on } from "@ngrx/store";
import { loadThemes } from "../actions/themes.action";
import { ThemeState } from "../models/theme.model";

const initialState: ThemeState = {
	themes: []
};

export const themeReducer = createReducer(
	initialState,
	on(loadThemes, (state, actions) => {
		return {
			themes: actions.themes
		}
	})
)
