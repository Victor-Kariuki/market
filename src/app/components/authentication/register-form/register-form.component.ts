import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { Register } from '../../../models/register.model';
import { RegisterUser } from '../../../store/actions/authentication.actions';

@Component({
  selector: 'app-register-form',
  template: `
    <form nz-form #registerForm="ngForm" (ngSubmit)="submitForm()">
      <nz-form-item>
        <nz-form-control nzHasFeedback nzErrorTip="Please input your username!">
          <nz-input-group nzPrefixIcon="user">
            <input type="text" nz-input placeholder="Username" [(ngModel)]="register.username" name="username" required
              minlength="4" />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>

      <nz-form-item>
        <nz-form-control nzHasFeedback nzErrorTip="Email is not valid!">
          <nz-input-group nzPrefixIcon="mail">
            <input type="email" nz-input placeholder="Email" [(ngModel)]="register.email" name="email" required email />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>

      <nz-form-item>
        <nz-form-control nzHasFeedback nzErrorTip="Please input your phone number!">
          <nz-input-group nzPrefixIcon="phone">
            <input type="number" nz-input placeholder="Phone number" [(ngModel)]="register.phone" name="phone" required />
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>

      <div nz-row nzGutter="16">
        <div nz-col nzSpan="12">
          <nz-form-item>
            <nz-form-control nzHasFeedback nzErrorTip="Please input your Password!">
              <nz-input-group nzPrefixIcon="lock">
                <input type="password" nz-input placeholder="Password" [(ngModel)]="register.password" name="password"
                  minlength="6" required />
              </nz-input-group>
            </nz-form-control>
          </nz-form-item>
        </div>

        <div nz-col nzSpan="12">
          <nz-form-item>
            <nz-form-control nzHasFeedback nzErrorTip="Please input your Password!">
              <nz-input-group nzPrefixIcon="lock">
                <input type="password" nz-input placeholder="Confirm Password" [(ngModel)]="register.confirmPassword"
                  name="confirmPassword" minlength="6" required />
              </nz-input-group>
            </nz-form-control>
          </nz-form-item>
        </div>
      </div>

      <button nz-button class="login-form-button login-form-margin" [nzType]="'primary'"
        [disabled]="!registerForm.form.valid">Register</button>
      Or <a> Login </a>
    </form>
  `,
  styles: [
  ]
})
export class RegisterFormComponent implements OnInit {

  register: Register = {
    email: '',
    username: '',
    phone: null,
    password: '',
    confirmPassword: '',
    application: 'KISOKOMARKET',
  };

  loading: boolean;

  constructor(private store: Store, private router: Router, private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.loading = this.store.selectSnapshot(state => state.auth.loading);
  }

  submitForm() {
    delete this.register.confirmPassword;
    console.log(this.register);
    this.store.dispatch(new RegisterUser(this.register)).subscribe((res) => {
      console.log(res);
      this.register = {
        email: '',
        username: '',
        phone: null,
        password: '',
        confirmPassword: '',
        application: 'KISOKOMARKET'
      };
      this.notification.create(
        'success',
        'Successfully register',
        'Welcome to kisokolab.'
      );
      this.router.navigate(['/login']);
    });
  }

}
