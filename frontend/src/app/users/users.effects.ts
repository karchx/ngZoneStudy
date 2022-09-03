import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, of, switchMap } from "rxjs";
import { UserService } from "../core/services/user.service";
import { displayError, displaySuccess } from "../shared/notify/notify.actions";
import { ActionsTypes, signup } from "./users.actions";

@Injectable()
export class UsersEffects {
  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signup),
      exhaustMap(payload =>
        this.userService.create(payload.user).pipe(
          switchMap(user => [
            { type: ActionsTypes.SIGN_UP_SUCCESS, user, authenticated: true },
            displaySuccess({ title: "Successfully", description: "ok" })
          ]),
          catchError(error =>
            of(displayError({ title: "Error", description: error.error.message }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
