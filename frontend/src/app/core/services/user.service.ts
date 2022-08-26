import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { BaseService } from "./base.service";

@Injectable({
  providedIn: "root"
})
export class UserService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/auth/signup`, user);
  }
}
