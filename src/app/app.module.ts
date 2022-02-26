import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

@NgModule({
  declarations: [
    AppComponent,
    NewsalasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
