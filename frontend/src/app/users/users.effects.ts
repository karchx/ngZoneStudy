import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { UserService } from "../core/services/user.service";
import { ActionsTypes, signup } from "./users.actions";

@Injectable()
export class UsersEffects {
  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signup),
      mergeMap(payload =>
        this.userService.create(payload.user).pipe(
          map(user => ({ type: ActionsTypes.SIGN_UP_SUCCESS, user })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
