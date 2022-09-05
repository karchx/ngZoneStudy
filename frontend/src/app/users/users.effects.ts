import { Injectable } from "@angular/core";
import {Router} from "@angular/router";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import { catchError, exhaustMap, map, of, tap} from "rxjs";
import {LocalStorageJwtService} from "../core/services/local-storage-jwt.service";
import {UserService} from "../core/services/user.service";
import {displayError} from "../shared/notify/notify.actions";
import {authActions} from "./users.actions";

@Injectable()
export class UsersEffects { 

  register$ = createEffect(() => 
    this.actions$.pipe(
      ofType(authActions.register),
      exhaustMap(payload =>
        this.userService.create(payload.user).pipe(
          map(response => authActions.registerSuccess({ user: response.user, token: response.token })),
          catchError(error => 
             of(displayError({ title: "Error", description: error.error.message }))
          )
        )
      )
    )
  );

  registerSuccess$ = createEffect(() => 
    this.actions$.pipe(
      ofType(authActions.registerSuccess),
      tap((action) => {
        this.localStorageJwtService.setItem(action.token || '').subscribe();
        this.router.navigateByUrl("/");
      }),
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private localStorageJwtService: LocalStorageJwtService,
    private router: Router
  ) {}
}
