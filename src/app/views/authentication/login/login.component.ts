import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div nz-row nzJustify="center" nzAlign="middle" style="height: 90vh">
      <div nz-col nzSpan="20">
        <h1 nz-typography>Login</h1>
        <p nz-typography>Welcome Back! Making sales easier</p>
        <app-login-form></app-login-form>
      </div>
    </div>
  `,
  styles: [`
    .login-form-margin {
      margin-bottom: 16px;
    }

    .login-form-forgot {
      float: right;
    }

    .login-form-button {
      width: 100%;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
