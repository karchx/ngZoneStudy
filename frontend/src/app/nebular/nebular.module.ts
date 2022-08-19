import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [],
  imports: [
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
  ],
	exports: [
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
  providers: [NbSidebarService],
})
export class NebularModule { }
