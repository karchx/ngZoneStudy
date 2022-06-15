import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { salas, ISalas, ITemas, temas } from "../../../utils/salasdb";

@Component({
  selector: "app-joinsalas",
  templateUrl: "./joinsalas.component.html",
  styles: []
})
export class JoinsalasComponent implements OnInit {
  private salas = salas;
  private temas = temas;
  public idSala: string = "";
  public sala!: ISalas | undefined;
  public theme: ITemas | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idSala = this.route.snapshot.paramMap.get("id") || "";
    console.log(this.idSala);
    this.getSala(this.idSala);
    this.getTheme(this.idSala);
  }

  getSala(id: string) {
    this.sala = this.salas.find(s => s.id === Number(id));
  }

  getTheme(idSala: string) {
    this.theme = this.temas.find(s => s.idsala === Number(idSala));
  }
}
