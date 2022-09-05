import { createActionGroup, props } from "@ngrx/store";
import { User } from "../core/models/user";

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    Register: props<{ user: User }>(),
    'Register Failure': props<{ error: Error }>(),
    'Register Success': props<{ user: User, token?:string }>(),
  }
});
