import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngZoneStudy';

  constructor(private sidebarService: NbSidebarService){}

  salas: { name:string, tiempo:string, participantes:number }[] = [
	  { name: "Matematicas", tiempo: "4h", participantes:4 },
	  { name: "CC", tiempo: "1h", participantes:1 },
	  { name: "Fisica", tiempo: "8h", participantes:2 },
	  { name: "Tecnicas", tiempo: "2h", participantes:8 },
  ]

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
