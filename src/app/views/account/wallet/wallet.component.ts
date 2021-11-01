import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  template: `
  <div nz-row [nzGutter]="[16, { xs: 8, sm: 16, md: 24, lg: 32 }]" nzAlign="top" nzJustify="center">
    <div nz-col nzXs="24" nzSm="24" nzMd="24" nzLg="24" nzXl="24">
      <nz-page-header [nzGhost]="false">
        <nz-page-header-title class="title">Wallet</nz-page-header-title>
        <nz-page-header-subtitle>Here is a summary of your wallet</nz-page-header-subtitle>
        <nz-page-header-extra>
          <button nz-button>Deposit</button>
          <button nz-button nzType="primary">Withdraw</button>
        </nz-page-header-extra>
        <nz-breadcrumb nz-page-header-breadcrumb>
          <nz-breadcrumb-item>Account</nz-breadcrumb-item>
          <nz-breadcrumb-item><a>Wallet</a></nz-breadcrumb-item>
        </nz-breadcrumb>
      </nz-page-header>
    </div>
  </div>


    <div nz-row [nzGutter]="[16, { xs: 8, sm: 16, md: 24, lg: 32 }]" nzAlign="top" nzJustify="center">
      <div nz-col nzXs="24" nzSm="24" nzMd="16" nzLg="16" nzXl="16">
        <div nz-row [nzGutter]="[16, { xs: 8, sm: 16, md: 24, lg: 32 }]">
          <div nz-col nzXs="24" nzSm="24" nzMd="8" nzLg="8" nzXl="8">
            <nz-card>
              <nz-statistic [nzValue]="(2019.111 | number: '1.0-2')!" [nzTitle]="'Income (KSH)'"></nz-statistic>
            </nz-card>
          </div>
          <div nz-col nzXs="24" nzSm="24" nzMd="8" nzLg="8" nzXl="8">
            <nz-card>
              <nz-statistic [nzValue]="(2019.111 | number: '1.0-2')!" [nzTitle]="'Expense (KSH)'"></nz-statistic>
            </nz-card>
          </div>
          <div nz-col nzXs="24" nzSm="24" nzMd="8" nzLg="8" nzXl="8">
            <nz-card>
              <nz-statistic [nzValue]="(2019.111 | number: '1.0-2')!" [nzTitle]="'Balance (KSH)'"></nz-statistic>
            </nz-card>
          </div>
        </div>
      </div>

      <div nz-col nzXs="24" nzSm="24" nzMd="8" nzLg="8" nzXl="8">
        <nz-card>
        <h3 class="heading">Recent Transactions</h3>
        <nz-list nzItemLayout="horizontal">
            <nz-list-item *ngFor="let item of data">
              <nz-list-item-meta
                nzAvatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                nzDescription="Ant Design, a design language for background applications, is refined by Ant UED Team"
              >
                <nz-list-item-meta-title>
                  <a href="https://ng.ant.design">{{ item.title }}</a>
                </nz-list-item-meta-title>
              </nz-list-item-meta>
            </nz-list-item>
            <nz-list-empty *ngIf="data.length === 0"></nz-list-empty>
          </nz-list>
        </nz-card>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class WalletComponent implements OnInit {

  data = [];

  constructor() { }

  ngOnInit(): void {
  }

}
