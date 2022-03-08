import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
	NbDialogModule,
	NbThemeModule, 
	NbLayoutModule, 
	NbSidebarModule, 
	NbActionsModule, 
	NbCardModule, 
	NbListModule,
	NbIconModule,
	NbMenuModule,
	NbButtonModule,
	NbSidebarService,
	NbInputModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NewsalasComponent } from './component/newsalas/newsalas.component';
import { JoinsalasComponent } from './component/joinsalas/joinsalas.component';
import { HomeComponent } from './component/home/home.component';
import { ListthemeComponent } from './component/listtheme/listtheme.component';
import { ViewthemeComponent } from './component/viewtheme/viewtheme.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsalasComponent,
    JoinsalasComponent,
    HomeComponent,
    ListthemeComponent,
    ViewthemeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
		RouterModule,
    NbThemeModule.forRoot({ name: 'default' }),
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
  ],
  providers: [
    NbSidebarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }