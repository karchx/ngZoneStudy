import { Component } from '@angular/core';
import { 
	NbSidebarService,
	NbDialogService,
} from '@nebular/theme';
import { NewsalasComponent } from './component/newsalas/newsalas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngZoneStudy';

  constructor(private sidebarService: NbSidebarService, private dialogService: NbDialogService){}

  salas: { name:string, tiempo:string, participantes:number }[] = [
	  { name: "Matematicas", tiempo: "4h", participantes:4 },
	  { name: "CC", tiempo: "1h", participantes:1 },
	  { name: "Fisica", tiempo: "8h", participantes:2 },
	  { name: "Tecnicas", tiempo: "2h", participantes:8 },
  ];

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
  
  open() {
		this.dialogService.open(NewsalasComponent, {
			context: {
				title: 'NEW'
			}
		})
  }
}
