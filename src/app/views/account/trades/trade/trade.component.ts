import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import {ActivatedRoute} from '@angular/router';

import { Trade } from '../../../../models/trade.model';
import { Ad } from '../../../../models/ad.model';
import { FetchTrade } from '../../../../store/actions/trade.actions';
import { FetchAd } from '../../../../store/actions/ad.actions';

@Component({
  selector: 'app-trade',
  template: `
    <div nz-row [nzGutter]="[16, { xs: 8, sm: 16, md: 24, lg: 32 }]" nzAlign="top" nzJustify="center">
      <div nz-col nzXs="24" nzSm="24" nzMd="24" nzLg="24" nzXl="24">
        <nz-page-header [nzGhost]="false">
          <nz-breadcrumb nz-page-header-breadcrumb>
            <nz-breadcrumb-item>Account</nz-breadcrumb-item>
            <nz-breadcrumb-item>trades</nz-breadcrumb-item>
            <nz-breadcrumb-item><a>{{ trade['itemId'] }}</a></nz-breadcrumb-item>
          </nz-breadcrumb>
          <nz-page-header-title class="title">Trade</nz-page-header-title>
          <nz-page-header-subtitle>This is a single trade</nz-page-header-subtitle>
          <nz-page-header-tags>
            <nz-tag [nzColor]="'blue'">{{ trade['status'] }}</nz-tag>
          </nz-page-header-tags>
          <nz-page-header-extra>
            <button nz-button nzType="danger" nzGhost>Raise Complaint</button>
            <button nz-button>Cancel</button>
            <button nz-button nzType="primary">Proceed</button>
          </nz-page-header-extra>
          <nz-page-header-content>
            <nz-descriptions nzSize="small" [nzColumn]="3">
              <nz-descriptions-item nzTitle="Seller" [nzSpan]="1"><a>{{ trade['initiator'] }}</a></nz-descriptions-item>
              <nz-descriptions-item nzTitle="Creation Time" [nzSpan]="1">{{ trade['dateCreated'] | date }}</nz-descriptions-item>
            </nz-descriptions>
          </nz-page-header-content>
        </nz-page-header>
      </div>
    </div>

    <div nz-row [nzGutter]="[16, { xs: 8, sm: 16, md: 24, lg: 32 }]" nzAlign="top" nzJustify="center">
      <div nz-col nzXs="24" nzSm="24" nzMd="16" nzLg="16" nzXl="16">
        <nz-list *ngIf="data.length" [nzDataSource]="data" [nzRenderItem]="item" [nzItemLayout]="'horizontal'">
          <ng-template #item let-item>
            <nz-comment [nzAuthor]="item.author" [nzDatetime]="item.displayTime">
              <nz-avatar nz-comment-avatar nzIcon="user" [nzSrc]="item.avatar"></nz-avatar>
              <nz-comment-content>
                <p>{{ item.content }}</p>
              </nz-comment-content>
            </nz-comment>
          </ng-template>
        </nz-list>
        <nz-comment>
          <nz-avatar nz-comment-avatar nzIcon="user" [nzSrc]="user.avatar"></nz-avatar>
          <nz-comment-content>
            <nz-form-item>
              <textarea [(ngModel)]="inputValue" nz-input rows="2"></textarea>
            </nz-form-item>
            <nz-form-item>
              <button nz-button nzType="primary" [nzLoading]="submitting" [disabled]="!inputValue" (click)="handleSubmit()">
                Add Comment
              </button>
            </nz-form-item>
          </nz-comment-content>
        </nz-comment>
      </div>
      <div nz-col nzXs="24" nzSm="24" nzMd="8" nzLg="8" nzXl="8">
        <app-ads-card [ad]="ad"></app-ads-card>
      </div>
    </div>

  `,
  styles: [
  ]
})
export class TradeComponent implements OnInit {

  trade: Trade;
  ad: Ad;
  data: any[] = [];
  submitting = false;
  inputValue = '';
  user = {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.fetchTrade({itemId: routeParams.trade, status: 'OPENED'});
      this.fetchAd(routeParams.trade);
    });
  }

  fetchTrade(trade) {
    this.store.dispatch(new FetchTrade(trade)).subscribe(() => {
      this.trade = this.store.selectSnapshot(state => state.trades.trade);
    });
  }

  fetchAd(payload) {
    this.store.dispatch(new FetchAd(payload)).subscribe(() => {
      this.ad = this.store.selectSnapshot(state => state.ads.ad);
    });
  }

  handleSubmit(): void {}

}
