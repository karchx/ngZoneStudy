import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Room } from "../core/models/room";

export const roomActions = createActionGroup({
  source: "Room",
  events: {
    "Load Rooms": emptyProps(),
    "Load Rooms Failure": props<{ error: Error }>(),
    "Load Rooms Success": props<{ rooms: Room[] }>()
  }
});
