import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";
import { NebularModule } from "./nebular/nebular.module";

import { AppComponent } from "./app.component";
import { ROOT_REDUCER } from "./state/app.state";
import { UsersEffects } from "./users/users.effects";
import { NotifyEffects } from "./shared/notify/notify.effects";
import { ThemeModule } from "./@theme/theme.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    NebularModule,
    StoreModule.forRoot(ROOT_REDUCER),
    ToastrModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([UsersEffects, NotifyEffects]),
    ThemeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
