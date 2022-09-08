import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { NewUser, User } from "../core/models/user";

export const authActions = createActionGroup({
  source: "Auth",
  events: {
    Register: props<{ user: NewUser }>(),
    "Register Failure": props<{ error: Error }>(),
    "Register Success": props<{ user: User; token?: string }>(),
    Logout: emptyProps()
  }
});
