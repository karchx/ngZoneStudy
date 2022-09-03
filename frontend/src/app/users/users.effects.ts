import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, of, switchMap, tap } from "rxjs";
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
            displaySuccess({ title: "Successfully", description: "Created Account" })
          ]),
          catchError(error =>
            of(displayError({ title: "Error", description: error.error.message }))
          )
        )
      )
    )
  );

  createUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ActionsTypes.SIGN_UP_SUCCESS),
        tap(user => {
          console.log(user);
          this.router.navigateByUrl("/");
          //localStorage.setItem("token", )
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router
  ) {}
}
