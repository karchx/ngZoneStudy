import { createFeature, createReducer, on } from "@ngrx/store";
import { Room } from "../core/models/room";
import { roomActions } from "./room.actions";

export interface RoomState {
  rooms: Rooms;
}

export interface Rooms {
  entities: Room[];
  loaded: boolean;
  loading: boolean;
}

export const roomsInitialState: RoomState = {
  rooms: {
    entities: [],
    loaded: false,
    loading: false
  }
};

export const roomFeature = createFeature({
  name: "room",
  reducer: createReducer(
    roomsInitialState,
    on(roomActions.loadRooms, state => {
      const rooms = { ...state.rooms, loading: true };
      return { ...state, rooms };
    }),
    on(roomActions.loadRoomsSuccess, (state, action) => {
      const rooms = {
        ...state.rooms,
        entities: action.rooms,
        loading: false,
        loaded: true
      };
      return { ...state, rooms };
    }),
    on(roomActions.loadRoomsFailure, (state, _) => {
      const rooms = {
        ...state.rooms,
        entities: [],
        loading: false,
        loaded: true
      };
      return { ...state, rooms };
    })
  )
});
