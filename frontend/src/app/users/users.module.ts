import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { UsersRoutingModule } from "./users-routing.module";
import { SignUpComponent } from "./sign-up/sign-up.component";
import {NbButtonModule, NbFormFieldModule, NbIconModule, NbInputModule} from "@nebular/theme";

const NEBULARMODULES = [
  NbIconModule,
  NbFormFieldModule,
  NbInputModule,
  NbButtonModule
];

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    NEBULARMODULES
  ]
})
export class UsersModule {}
