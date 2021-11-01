import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { AuthState } from '../../store/state/authentication.state';

@Component({
  selector: 'app-navbar',
  template: `
    <ul nz-menu nzTheme="dark" nzMode="horizontal">
      <li nz-menu-item nzMatchRouter>
        <a href="/">
          <i nz-icon nzType="home"></i>
          Home
        </a>
      </li>
      <li nz-menu-item nzMatchRouter>
        <a href="/listings">
          <i nz-icon nzType="shop"></i>
          Listings
        </a>
      </li>
      <li nz-menu-item nzMatchRouter>
      <a href="/categories">
        <i nz-icon nzType="sliders"></i>
        Categories
      </a>
      </li>

      <li nz-menu-item nzMatchRouterExact *ngIf="isAuthenticated">
        <a href="/account">
          <i nz-icon nzType="unlock"></i>
          My Account
        </a>
      </li>

      <li nz-menu-item nzMatchRouterExact *ngIf="!isAuthenticated">
        <a href="/login">
          <i nz-icon nzType="unlock"></i>
          Login
        </a>
      </li>
      <li nz-menu-item nzMatchRouterExact *ngIf="!isAuthenticated">
        <a href="/register">
          <i nz-icon nzType="user"></i>
          Register
        </a>
      </li>
      <li nz-menu-item nzMatchRouterExact>
        <a href="/ad/create">
          <i nz-icon nzType="plus"></i>
          Post an Ad
        </a>
      </li>
    </ul>
  `,
  styles: [``]
})
export class NavbarComponent implements OnInit {

  isAuthenticated: boolean;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isAuthenticated = this.store.selectSnapshot(AuthState.isAuthenticated);
  }

}
