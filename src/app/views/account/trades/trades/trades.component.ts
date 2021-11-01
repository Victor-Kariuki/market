import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trades',
  template: `
  <div nz-row [nzGutter]="[16, { xs: 8, sm: 16, md: 24, lg: 32 }]" nzAlign="top" nzJustify="center">
    <div nz-col nzXs="24" nzSm="24" nzMd="24" nzLg="24" nzXl="24">
      <nz-page-header [nzGhost]="false">
        <nz-page-header-title>Trades</nz-page-header-title>
        <nz-page-header-subtitle>Here is a summary of all your trades</nz-page-header-subtitle>
        <nz-breadcrumb nz-page-header-breadcrumb>
          <nz-breadcrumb-item>Account</nz-breadcrumb-item>
          <nz-breadcrumb-item><a>Trades</a></nz-breadcrumb-item>
        </nz-breadcrumb>
      </nz-page-header>
    </div>
  </div>

  <div nz-row [nzGutter]="[16, { xs: 8, sm: 16, md: 24, lg: 32 }]" nzAlign="top" nzJustify="center">
    <div nz-col nzXs="24" nzSm="24" nzMd="24" nzLg="24" nzXl="24">
      <nz-tabset [nzTabPosition]="'top'" [nzType]="'card'">
        <nz-tab nzTitle="Open">
          <app-ads-table></app-ads-table>
        </nz-tab>
        <nz-tab nzTitle="Complete">
          <app-ads-table></app-ads-table>
        </nz-tab>
        <nz-tab nzTitle="Cancelled">
          <app-ads-table></app-ads-table>
        </nz-tab>
      </nz-tabset>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class TradesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
