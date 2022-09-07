export interface User {
  email: string;
  username: string;
  password: string; //TODO: remove password
  id?: number;
}

export interface UserResponse {
  user: User;
  token: string;
}

export interface NewUser {
  email: string;
  username: string;
  password: string;
}

export interface NewUserRequest {
  user: NewUser;
}
