import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Theme } from "../state/models/theme.model";

const THEMES: Array<Theme> = [
  {
    id: 1,
    idroom: 1,
    description: "matematicas"
  },
  {
    id: 2,
    idroom: 2,
    description: "otro"
  }
];

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  private theme: Observable<Theme[]> = new Observable(observable =>
    observable.next(THEMES)
  );

  getThemes(): Observable<Theme[]> {
    return this.theme;
  }
  constructor() {}
}
