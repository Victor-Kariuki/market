import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  template: `
    <div nz-row nzJustify="center" nzAlign="middle" style="height: 90vh">
      <div nz-col nzSpan="20">
        <h1 nz-typography>Register</h1>
        <p nz-typography>Welcome Back! Making sales easier</p>
        <app-register-form></app-register-form>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
