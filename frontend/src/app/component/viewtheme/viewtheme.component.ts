import { Component, OnInit } from "@angular/core";
import { temas, ITemas } from "../../../utils/salasdb";

@Component({
  selector: "app-viewtheme",
  templateUrl: "./viewtheme.component.html",
  styles: []
})
export class ViewthemeComponent implements OnInit {
  id!: number;
  temas!: Array<ITemas>;

  constructor() {}

  ngOnInit(): void {
    this.temas = temas.filter(t => t.idsala === this.id);
  }
}
