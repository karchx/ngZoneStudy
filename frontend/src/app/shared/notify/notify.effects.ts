import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ToastrService } from "ngx-toastr";
import { tap } from "rxjs";
import { displayError, displaySuccess } from "./notify.actions";

@Injectable()
export class NotifyEffects {
  displaySuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(displaySuccess),
        tap(action => {
          this.toastr.success(action.title, action.description);
        })
      ),
    { dispatch: false }
  );

  displayError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(displayError),
        tap(action => {
          this.toastr.error(action.title, action.description);
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private toastr: ToastrService) {}
}
