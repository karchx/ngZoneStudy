import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
		UsersRoutingModule
  ]
})
export class UsersModule { }
