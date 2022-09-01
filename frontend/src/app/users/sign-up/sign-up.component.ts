import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { User } from "src/app/core/models/user";
import { AppState } from "src/app/state/app.state";
import { signup } from "../users.actions";
import { getSignUpError } from "../users.reducers";

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
  public error$: Observable<string | undefined> = new Observable();

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required]
    });

    this.error$ = this.store.select(getSignUpError);
  }

  getInputType() {
    if (this.showPassword) {
      return "text";
    }
    return "password";
  }

  submit() {
    const payload: User = {
      ...this.signupForm.value
    };
    this.store.dispatch(signup({ user: payload }));
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
