import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { UsersRoutingModule } from "./users-routing.module";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { NebularModule } from "../nebular/nebular.module";

@NgModule({
  declarations: [SignUpComponent],
  imports: [UsersRoutingModule, NebularModule, ReactiveFormsModule]
})
export class UsersModule {}
