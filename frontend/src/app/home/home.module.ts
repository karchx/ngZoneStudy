import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { NebularModule } from "../nebular/nebular.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, NebularModule]
})
export class HomeModule {}
