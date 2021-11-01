import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
  <ul nz-menu nzTheme="dark" nzMode="inline">
    <li nz-menu-item nzMatchRouter>
      <a href="/account">
        <i nz-icon nzType="bar-chart"></i>
        Dashboard
      </a>
    </li>
    <li nz-menu-item nzMatchRouter>
      <a href="/account/ads">
        <i nz-icon nzType="shop"></i>
        My Ads
      </a>
    </li>
    <li nz-menu-item nzMatchRouter>
      <a href="/account/trades">
        <i nz-icon nzType="message"></i>
        Trades
      </a>
    </li>
    <li nz-menu-item nzMatchRouter>
      <a href="/account/wallet">
        <i nz-icon nzType="dollar"></i>
        Wallet
      </a>
    </li>
  </ul>
  `,
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
