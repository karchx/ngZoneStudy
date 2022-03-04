import { Component } from '@angular/core';
import { 
	NbSidebarService,
	NbDialogService,
} from '@nebular/theme';
import { NewsalasComponent } from './component/newsalas/newsalas.component';

import { salas, temas, ISalas, ITemas } from '../utils/salasdb';
import { ListthemeComponent } from './component/listtheme/listtheme.component';
import { ViewthemeComponent } from './component/viewtheme/viewtheme.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'STUDYSPACE';

  constructor(
	private sidebarService: NbSidebarService, 
	private dialogService: NbDialogService){}

	// TODO: migrar a un service
	public salas = salas;
	public temas = temas;

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
  
	// TODO: migrar a un service
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
					this.createListTheme(newSala.id);
				}
			}
		});
  }

	// TODO: migrar a un service
	createListTheme (idsala:number){
		this.dialogService.open(ListthemeComponent)
			.onClose.subscribe({
				next: (r) => {
					const newTema: ITemas = {
						id: Math.trunc(Math.random() * 1000),
						tema: r,
						idsala
					};

					this.temas.push(newTema);
				}
			});
	}

	join(id:number) {
		this.salas.filter(s => s.id === id)
			.map(s => s.participantes++)
	}

	viewTheme(id:number) {
		this.dialogService.open(ViewthemeComponent, {
			context: {
				id
			}
		})
			.onClose.subscribe();
	}
}
