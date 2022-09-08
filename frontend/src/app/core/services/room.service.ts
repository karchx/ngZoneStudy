import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RoomResponse } from "../models/room";
import { BaseService } from "./base.service";

@Injectable({
  providedIn: "root"
})
export class RoomService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  //TODO: create interceptor token
  getRooms(): Observable<RoomResponse> {
    return this.httpClient.get<RoomResponse>(`${this.BASE_URL}/room`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMThkNWZhNDRhNDAwYzc2YWE5NzlmMiIsImlhdCI6MTY2MjU3MjA0MCwiZXhwIjoxNjcxMjEyMDQwfQ.vB48PUSZY5WC3H4-TBNiRLgrZ_p6u6tQMXhYwH4lyHU"
      }
    });
  }
}
