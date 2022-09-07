import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import {NbButtonModule, NbIconModule, NbTooltipModule} from "@nebular/theme";

const NEBULARMODULES = [
  NbIconModule, 
  NbButtonModule,
  NbTooltipModule,
]

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, NEBULARMODULES]
})
export class HomeModule {}
