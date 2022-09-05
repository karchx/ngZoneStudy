import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {User} from "../core/models/user";

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    Register: emptyProps(),
    'Register Failure': props<{ error: Error }>(),
    'Register Success': props<{ user: User }>(),
  }
});
