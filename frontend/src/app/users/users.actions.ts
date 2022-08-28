import { createAction, props } from "@ngrx/store";
import { User } from "../core/models/user";

export enum ActionsTypes {
  SIGN_UP = "[SIGN_UP] Sign up",
  SIGN_UP_SUCCESS = "[SIGN_UP] Sign up success",
  SIGN_UP_ERROR = "[SIGN_UP] Sign up error"
}

export const signup = createAction(ActionsTypes.SIGN_UP, props<{ user: User }>());
export const signupSuccess = createAction(ActionsTypes.SIGN_UP, props<{ user: User }>());
export const signupError = createAction(ActionsTypes.SIGN_UP_ERROR, props<{ error: any }>());
