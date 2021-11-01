import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  template: `
    <div nz-row [nzGutter]="[16, { xs: 8, sm: 16, md: 24, lg: 32 }]" nzAlign="top" nzJustify="center">
      <div nz-col nzXs="24" nzSm="24" nzMd="24" nzLg="24" nzXl="24">
        <nz-page-header [nzGhost]="false">
          <nz-page-header-title class="title">Dashboard</nz-page-header-title>
          <nz-page-header-subtitle>Get an overview of all your activites</nz-page-header-subtitle>
          <nz-breadcrumb nz-page-header-breadcrumb>
            <nz-breadcrumb-item>Account</nz-breadcrumb-item>
            <nz-breadcrumb-item><a>Dashboard</a></nz-breadcrumb-item>
          </nz-breadcrumb>
        </nz-page-header>
      </div>
    </div>

    <div nz-row [nzGutter]="[16, { xs: 8, sm: 16, md: 24, lg: 32 }]">
      <div nz-col nzXs="24" nzSm="24" nzMd="8" nzLg="8" nzXl="8">
        <nz-card>
          <nz-statistic [nzValue]="(2019.111 | number: '1.0-2')!" [nzTitle]="'Total Ads Posted'"></nz-statistic>
        </nz-card>
      </div>
      <div nz-col nzXs="24" nzSm="24" nzMd="8" nzLg="8" nzXl="8">
        <nz-card>
          <nz-statistic [nzValue]="(2019.111 | number: '1.0-2')!" [nzTitle]="'Featured Ads'"></nz-statistic>
        </nz-card>
      </div>
      <div nz-col nzXs="24" nzSm="24" nzMd="8" nzLg="8" nzXl="8">
        <nz-card>
          <nz-statistic [nzValue]="(2019.111 | number: '1.0-2')!" [nzTitle]="'Trades'"></nz-statistic>
        </nz-card>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
