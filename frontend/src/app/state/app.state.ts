import { ActionReducerMap } from "@ngrx/store";
import * as users from "../users/users.reducers";
import * as rooms from "../room/room.reducers";

export interface AppState {
  auth: users.AuthState;
  room: rooms.RoomState;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  auth: users.authFeature.reducer,
  room: rooms.roomFeature.reducer
};
