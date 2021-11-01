import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { Login } from '../../../models/login.model';
import { LoginUser } from '../../../store/actions/authentication.actions';

@Component({
  selector: 'app-login-form',
  template: `
    <form nz-form #loginForm="ngForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-control nzHasFeedback nzErrorTip="Please input your email!">
          <nz-input-group nzPrefixIcon="mail">
            <input type="email" nz-input placeholder="Email" [(ngModel)]="login.email" name="email" required email />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-control nzHasFeedback nzErrorTip="Please input your Password!">
          <nz-input-group nzPrefixIcon="lock">
            <input type="password" nz-input placeholder="Password" [(ngModel)]="login.password" name="password" required
              minlength="6" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <div nz-row class="login-form-margin" [nzGutter]="16">
        <div nz-col [nzSpan]="12">
          <label nz-checkbox>
            <span>Remember me</span>
          </label>
        </div>
        <div nz-col [nzSpan]="12">
          <a class="login-form-forgot">Forgot password</a>
        </div>
      </div>
      <nz-form-item>
      <button nz-button class="login-form-button login-form-margin" [nzType]="'primary'"
        [disabled]="!loginForm.form.valid">Log in</button>
      Or <a> register now! </a>
      </nz-form-item>
    </form>
  `,
  styles: [
  ]
})
export class LoginFormComponent implements OnInit {

  loading: boolean;

  login: Login = {
    email: '',
    password: '',
    application: 'KISOKOMARKET'
  };

  constructor(private store: Store, private router: Router, private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.loading = this.store.selectSnapshot(state => state.auth.loading);
  }

  submitForm(): void {
    this.store.dispatch(new LoginUser(this.login)).subscribe((res) => {
      this.login = {
        email: '',
        password: '',
        application: 'KISOKOMARKET'
      };
      this.notification.create(
        'success',
        'Successfully logged in',
        'Welcome back .'
      );
      this.router.navigate(['/listings']);
    });
  }

}
