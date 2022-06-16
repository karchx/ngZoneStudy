import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { ThemeService } from "src/app/services/theme.service";
import { LoadedThemes, LoadThemes } from "../actions/themes.action";

@Injectable()
export class ThemeEffects {
  loadThemes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadThemes),
      mergeMap(() =>
        this.themeService.getThemes().pipe(
          map(themes => ({ type: LoadedThemes, themes })),
          catchError(() => EMPTY)
        )
      )
    )
  );
  constructor(private actions$: Actions, private themeService: ThemeService) {}
}
