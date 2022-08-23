import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [`
		.divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}
.h-custom {
height: calc(100% - 73px);
}
@media (max-width: 450px) {
.h-custom {
height: 100%;
}
}
		`]
})
export class SignUpComponent {
	showPassword: boolean = false;

	getInputType() {
		if(this.showPassword) {
			return 'text';
		}
		return 'password';
	}

	toggleShowPassword() {
		this.showPassword = !this.showPassword;
	}
}
