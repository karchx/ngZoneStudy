import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageJwtService {

  getItem(): Observable<string | null> {
    const data = localStorage.getItem("jwtToken");
    if (data) {
      return of(data);
    } else {
      return of(null);
    }
  }

  setItem(data: string): Observable<string> {
    localStorage.setItem("jwtToken", data)
    return of(data);
  }

  removeItem(): Observable<boolean> {
    localStorage.removeItem("jwtItem");
    return of(true);
  }
}
