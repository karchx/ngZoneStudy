import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoomComponent } from "./room.component";
import { RoomRoutingModule } from "./room-routing.module";
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbTooltipModule,
  NbUserModule
} from "@nebular/theme";

const NEBULARMODULES = [
  NbCardModule,
  NbIconModule,
  NbButtonModule,
  NbTooltipModule,
  NbUserModule
];

@NgModule({
  declarations: [RoomComponent],
  imports: [CommonModule, RoomRoutingModule, NEBULARMODULES]
})
export class RoomModule {}
