import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { NewUser } from "src/app/core/models/user";
import { AppState } from "src/app/state/app.state";
import { authActions } from "../users.actions";

// TODO: add style scss
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styles: [
    `
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
    `
  ]
})
export class SignUpComponent implements OnInit {
  public signupForm: FormGroup = new FormGroup({});
  public showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  getInputType() {
    if (this.showPassword) {
      return "text";
    }
    return "password";
  }

  submit() {
    const payload: NewUser = {
      ...this.signupForm.value
    };

    this.store.dispatch(authActions.register({ user: payload }));
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
