import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Room } from "../models/room";
import { BaseService } from "./base.service";

@Injectable({
  providedIn: "root"
})
export class RoomService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  //Authorization
  //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMThkNWZhNDRhNDAwYzc2YWE5NzlmMiIsImlhdCI6MTY2MjU3MjA0MCwiZXhwIjoxNjcxMjEyMDQwfQ.vB48PUSZY5WC3H4-TBNiRLgrZ_p6u6tQMXhYwH4lyHU
  getRooms(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(`${this.BASE_URL}/room`);
  }
}
