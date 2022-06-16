import { Component, OnInit } from "@angular/core";
import { NbDialogService, NbSidebarService } from "@nebular/theme";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ISalas, ITemas, salas } from "../utils/salasdb";
import { NewsalasComponent } from "./component/newsalas/newsalas.component";
import { ViewthemeComponent } from "./component/viewtheme/viewtheme.component";
import { ThemeService } from "./services/theme.service";
import { loadThemes } from "./state/actions/themes.action";
import { AppState } from "./state/app.state";
import { selectLoading, selectThemes } from "./state/selector/theme.selector";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	title = "STUDYSPACE";
	public temas!: ITemas[];
	public salas = salas;
	loading$: Observable<boolean> = new Observable();
	theme$: Observable<any> = new Observable();

	constructor(
		private sidebarService: NbSidebarService,
		private dialogService: NbDialogService,
		private store: Store<AppState>,
		private themeService: ThemeService
	) { }

	ngOnInit(): void {
		this.loading$ = this.store.select(selectLoading);

		this.store.dispatch(loadThemes());

		this.theme$ = this.store.select(selectThemes);
	}

	// TODO: migrar a un service
	toggle() {
		this.sidebarService.toggle(true);
		return false;
	}

	// TODO: migrar a un service
	open() {
		this.dialogService.open(NewsalasComponent).onClose.subscribe({
			next: r => {
				if (r) {
					const newSala: ISalas = {
						id: Math.trunc(Math.random() * 10),
						...r,
						participantes: 1
					};
					this.salas.push(newSala);
					//						this.createListTheme(newSala.id);
				}
			}
		});
	}

	// TODO: migrar a un service
	/*createListTheme (idsala:number){
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
	}*/

	join(id: number) {
		this.salas.filter(s => s.id === id).map(s => s.participantes++);
	}

	viewTheme(id: number) {
		this.dialogService
			.open(ViewthemeComponent, {
				context: {
					id
				}
			})
			.onClose.subscribe();
	}
}
