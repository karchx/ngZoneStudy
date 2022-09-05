import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { NewUser, UserResponse } from "../models/user";
import { BaseService } from "./base.service";

@Injectable({
  providedIn: "root"
})
export class UserService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  create(user: NewUser): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.BASE_URL}/auth/signup`, user);
  }
}
