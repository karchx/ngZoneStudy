import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Room } from "../core/models/room";
import { AppState } from "../state/app.state";
import { roomActions } from "./room.actions";
import { selectRoomEntities } from "./room.selectors";

@Component({
  selector: "app-room",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.scss"]
})
export class RoomComponent implements OnInit {
  rooms$: Observable<Room[]> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(roomActions.loadRooms());
    this.rooms$ = this.store.select(selectRoomEntities);
  }
}
