import { createSelector } from "@ngrx/store";
import { roomFeature } from "./room.reducers";

const { selectRooms } = roomFeature;

export const selectRoomEntities = createSelector(selectRooms, rooms => rooms.entities);

export const roomsQuery = {
  selectRoomEntities
};
