import { Component } from '@angular/core';
import { 
	NbSidebarService,
	NbDialogService,
} from '@nebular/theme';
import { NewsalasComponent } from './component/newsalas/newsalas.component';

interface ISalas {
	id: number;
	name:string;
	time:string;
	participantes:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngZoneStudy';

  constructor(private sidebarService: NbSidebarService, private dialogService: NbDialogService){}

  salas: Array<ISalas>= [];

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
  
  open() {
	this.dialogService.open(NewsalasComponent)
		.onClose.subscribe({
			next: (r) => {
				if(r) {
					const newSala: ISalas = {
						id: Math.trunc(Math.random() * 10),
						...r,
						participantes: 1,
					}
					this.salas.push(newSala);
				}
			}
		});
  }

	join(id:number) {
		this.salas.filter(s => s.id === id)
			.map(s => s.participantes++)
	}
}
