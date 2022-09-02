import { createReducer, on } from "@ngrx/store";
import { displayError, displaySuccess, displayWarning } from "./notify.actions";

const initialState = 0;

export const notifyReducer = createReducer(
  initialState,
  on(displaySuccess, state => state),
  on(displayError, state => state),
  on(displayWarning, state => state)
);
