import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads',
  template: `
    <div nz-row [nzGutter]="[16, { xs: 8, sm: 16, md: 24, lg: 32 }]" nzAlign="top" nzJustify="center">
      <div nz-col nzXs="24" nzSm="24" nzMd="24" nzLg="24" nzXl="24">
        <nz-page-header [nzGhost]="false">
          <nz-page-header-title class="title">Your Ads</nz-page-header-title>
          <nz-page-header-subtitle>Manage you ad listings</nz-page-header-subtitle>
          <nz-page-header-extra>
          <button nz-button>Create new Ad</button>
            <button nz-button>Import Ads</button>
            <button nz-button nzType="primary">Export Ads</button>
          </nz-page-header-extra>
          <nz-breadcrumb nz-page-header-breadcrumb>
            <nz-breadcrumb-item>Account</nz-breadcrumb-item>
            <nz-breadcrumb-item><a>Ads</a></nz-breadcrumb-item>
          </nz-breadcrumb>
        </nz-page-header>
      </div>
    </div>

    <div nz-row [nzGutter]="[16, { xs: 8, sm: 16, md: 24, lg: 32 }]" nzAlign="top" nzJustify="center">
      <div nz-col nzXs="24" nzSm="24" nzMd="24" nzLg="24" nzXl="24">
        <nz-tabset [nzTabPosition]="'top'" [nzType]="'card'">
          <nz-tab nzTitle="All Ads">
            <app-ads-table></app-ads-table>
          </nz-tab>
          <nz-tab nzTitle="Sold">
            <app-ads-table></app-ads-table>
          </nz-tab>
          <nz-tab nzTitle="Active">
            <app-ads-table></app-ads-table>
          </nz-tab>
          <nz-tab nzTitle="Featured">
            <app-ads-table></app-ads-table>
          </nz-tab>
        </nz-tabset>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class AdsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
