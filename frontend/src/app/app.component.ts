import { Component, OnInit } from "@angular/core";
import { NbMenuItem, NbSidebarService } from "@nebular/theme";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "./state/app.state";
import { authActions } from "./users/users.actions";
import { authQuery } from "./users/users.selectors";

export const MENU_ITEMS_PUBLIC: NbMenuItem[] = [
  {
    title: "Home",
    icon: "home",
    link: "/"
  }
];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "STUDYSPACE";
  isLoggedIn$: Observable<boolean> = new Observable();
  toggledSidebar = false;
  menu!: NbMenuItem[];

  constructor(private sidebarService: NbSidebarService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.menu = MENU_ITEMS_PUBLIC;
    this.isLoggedIn$ = this.store.select(authQuery.selectLoggedIn);
    //this.isLoggedIn$.subscribe(v => console.log(v))
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, "menu-sidebar");
    this.toggledSidebar = true;
    return false;
  }

  openDialog(): void {
    console.log("hello");
  }

  logOut(): void {
    this.store.dispatch(authActions.logout());
  }
}
