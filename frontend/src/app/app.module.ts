import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbSidebarModule,
  NbSidebarService,
  NbThemeModule
} from "@nebular/theme";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./component/home/home.component";
import { JoinsalasComponent } from "./component/joinsalas/joinsalas.component";
import { ListthemeComponent } from "./component/listtheme/listtheme.component";
import { NewsalasComponent } from "./component/newsalas/newsalas.component";
import { ViewthemeComponent } from "./component/viewtheme/viewtheme.component";
import { ROOT_REDUCER } from "./state/app.state";

@NgModule({
  declarations: [
    AppComponent,
    NewsalasComponent,
    JoinsalasComponent,
    HomeComponent,
    ListthemeComponent,
    ViewthemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    NbThemeModule.forRoot({ name: "default" }),
    NbDialogModule.forRoot(),
    NbButtonModule,
    NbCardModule,
    NbLayoutModule,
    NbListModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbIconModule,
    NbActionsModule,
    NbMenuModule,
    NbInputModule,
    StoreModule.forRoot(ROOT_REDUCER),
    StoreDevtoolsModule.instrument({ maxAge: 10 })
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
