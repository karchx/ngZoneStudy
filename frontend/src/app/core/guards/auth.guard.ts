import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { map, Observable, take } from "rxjs";
import { LocalStorageJwtService } from "../services/local-storage-jwt.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private storage: LocalStorageJwtService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.storage.getItem().pipe(
      map(token => {
        if (!token) {
          this.router.navigate(["/users/sign-up"]);
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
