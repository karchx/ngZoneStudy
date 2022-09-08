import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { EffectsModule } from "@ngrx/effects";
import { ActionReducer, MetaReducer, StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";
import { NbEvaIconsModule } from "@nebular/eva-icons";

import { AppComponent } from "./app.component";
import { AppState, ROOT_REDUCER } from "./state/app.state";
import { UsersEffects } from "./users/users.effects";
import { NotifyEffects } from "./shared/notify/notify.effects";
import { ThemeModule } from "./@theme/theme.module";
import { localStorageSync } from "ngrx-store-localstorage";
import {
  NbButtonModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbSidebarService,
  NbThemeModule
} from "@nebular/theme";
import { RoomEfects } from "./room/room.effects";

export function localStorageSyncReducer(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return localStorageSync({ keys: ["auth"], rehydrate: true })(reducer);
}
const metaReducers: MetaReducer<AppState, any>[] = [localStorageSyncReducer];

const NEBULARMODULES = [
  NbEvaIconsModule,
  NbLayoutModule,
  NbIconModule,
  NbSidebarModule,
  NbMenuModule.forRoot(),
  NbButtonModule
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot(ROOT_REDUCER, { metaReducers }),
    ToastrModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([UsersEffects, NotifyEffects, RoomEfects]),
    ThemeModule,
    NbThemeModule.forRoot({ name: "default" }),
    NEBULARMODULES
  ],
  bootstrap: [AppComponent],
  providers: [NbSidebarService]
})
export class AppModule {}
