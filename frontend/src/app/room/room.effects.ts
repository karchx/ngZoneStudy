import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ToastrService } from "ngx-toastr";
import { catchError, exhaustMap, map, of } from "rxjs";
import { RoomService } from "../core/services/room.service";
import { roomActions } from "./room.actions";

@Injectable()
export class RoomEfects {
  loadRooms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(roomActions.loadRooms),
      exhaustMap(_ =>
        this.rooomService.getRooms().pipe(
          map(response => roomActions.loadRoomsSuccess({ rooms: response.rooms })),
          catchError(error => {
            this.toastr.error("Failure", error.error.message);
            return of(roomActions.loadRoomsFailure({ error }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private rooomService: RoomService,
    private toastr: ToastrService
  ) {}
}
