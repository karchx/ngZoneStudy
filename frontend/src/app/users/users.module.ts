import { NgModule } from "@angular/core";
import { UsersRoutingModule } from "./users-routing.module";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { NebularModule } from "../nebular/nebular.module";

@NgModule({
  declarations: [SignUpComponent],
  imports: [UsersRoutingModule, NebularModule]
})
export class UsersModule {}
