import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {

  form: FormGroup = new FormGroup({
    login: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
  });

  constructor() {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
