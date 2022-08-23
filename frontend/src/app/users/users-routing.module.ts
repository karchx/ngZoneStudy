import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";

const routes: Routes = [
  {
    path: "sign-up",
    component: SignUpComponent
  }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class UsersRoutingModule {}
