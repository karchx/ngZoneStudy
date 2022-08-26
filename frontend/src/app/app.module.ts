import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from "./app-routing.module";
import { NebularModule } from "./nebular/nebular.module";

import { AppComponent } from "./app.component";
import { ROOT_REDUCER } from "./state/app.state";
import { ThemeEffects } from "./state/effects/theme.effect";
import { UsersEffects } from "./users/users.effects";
import { HttpClientModule } from "@angular/common/http";

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
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([ThemeEffects, UsersEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
