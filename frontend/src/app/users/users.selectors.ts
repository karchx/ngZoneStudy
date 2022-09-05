import { authFeature } from "./users.reducers"

export const { selectAuthState, selectLoggedIn, selectStatus, selectUser } = authFeature;

export const authQuery = {
  selectAuthState,
  selectLoggedIn,
  selectStatus,
  selectUser
};
