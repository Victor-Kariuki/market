import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { Ad } from '../../../models/ad.model';
import { FetchAd } from '../../../store/actions/ad.actions';
import { CreateTrade } from '../../../store/actions/trade.actions';

@Component({
  selector: 'app-single',
  template: `
   <div class="listing-header">
      <div nz-row nzAlign="middle" nzJustify="space-between">
        <div nz-col nzXs="20" nzSm="20" nzMd="20" nzLg="20" nzXl="20">
          <h1 class="listing-header-title">{{ ad['title'] }}</h1>
          <p class="listing-header-breadcrumbs">
            Listings <i nz-icon nzType="right" nzTheme="outline"></i> {{ad['category']}}
          </p>
        </div>
        <div nz-col nzXs="4" nzSm="4" nzMd="4" nzLg="4" nzXl="4">
          <i nz-icon nzType="search" nzTheme="outline" class="listing-search-button"></i>
        </div>
      </div>
    </div>

    <div nz-row nzJustify="center" nzAlign="middle" class="hero"
      [nzGutter]="[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]">
      <div nz-col nzXs="24" nzSm="24" nzMd="16" nzLg="16" nzXl="16">
        <nz-carousel nzAutoPlay>
          <div nz-carousel-content *ngFor="let img of ad['images']" class="ad-carousel-content">
            <img [src]="img" alt="" class="nz-carousel-ad-image">
          </div>
        </nz-carousel>

        <nz-card>
          <h1 class="title">{{ ad['title'] }}</h1>
            <div nz-row>
            <div nz-col nzFlex="auto">
              <nz-space>
                <nz-space-item>
                  <span nz-typography nzDisabled>
                    <i nz-icon nzType="sliders" nzTheme="outline"></i> category: {{ ad['category'] }}
                  </span>
                </nz-space-item>

                <nz-space-item>
                  <span nz-typography nzDisabled>
                    <i nz-icon nzType="calendar" nzTheme="outline"></i> Posted On {{ ad['dateCreated'] | date }}
                  </span>
                </nz-space-item>

                <nz-space-item>
                  <span nz-typography nzDisabled>
                    <i nz-icon nzType="compass" nzTheme="outline"></i> {{ ad['city'] }}
                  </span>
                </nz-space-item>
              </nz-space>
            </div>

            <div nz-col nzFlex="100px">
              <span nz-typography nzDisabled>
                <i nz-icon nzType="eye" nzTheme="outline"></i> {{ad['views']}} views
              </span>
            </div>
          </div>

          <p nz-typography>{{ ad['description'] }}</p>

          <h3 class="heading">Share</h3>
          <div nz-row [nzGutter]="[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]">
            <div nz-col><i nz-icon nzType="facebook" nzTheme="outline" class="social-icon"></i></div>
            <div nz-col><i nz-icon nzType="twitter" nzTheme="outline" class="social-icon"></i></div>
            <div nz-col><i nz-icon nzType="whats-app" nzTheme="outline" class="social-icon"></i></div>
            <div nz-col><i nz-icon nzType="mail" nzTheme="outline" class="social-icon"></i></div>
          </div>
        </nz-card>
      </div>

      <div nz-col nzXs="24" nzSm="24" nzMd="8" nzLg="8" nzXl="8">
        <div nz-row [nzGutter]="[{ xs: 8, sm: 8, md: 16, lg: 16 }, { xs: 8, sm: 16, md: 24, lg: 32 }]">
          <div nz-col nzXs="24" nzSm="24" nzMd="24" nzLg="24" nzXl="24">
            <nz-card style="background: #001529">
              <nz-statistic
                [nzValue]="( ad['prize'] | currency )!"
                [nzValueStyle]="{ color: '#fff' }"
              >
              </nz-statistic>
            </nz-card>
          </div>

          <div nz-col nzXs="24" nzSm="24" nzMd="24" nzLg="24" nzXl="24">
            <nz-card>
              <h1 class="title">Ad Owner</h1>
              <h3 class="heading">{{ad['name']}}</h3>
              <nz-avatar nzSize="large" nzSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png">
              </nz-avatar>
              <br>
              <nz-rate [ngModel]="5"></nz-rate>
            </nz-card>
          </div>

          <div nz-col nzXs="24" nzSm="24" nzMd="24" nzLg="24" nzXl="24">
            <button nz-button nzType="primary" (click)="openTrade()" nzBlock nzSize="large">
              <i nz-icon nzType="poweroff"></i>Start Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .social-icon {
      font-size: 1.5em;
    }
  `]
})
export class SingleComponent implements OnInit {

  ad: Ad;
  trade = {
    amount: null,
    initiator: null,
    itemId: null,
  };

  constructor(private store: Store, private route: ActivatedRoute, private router: Router, private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.fetchAd(routeParams.ad);
      this.trade.itemId = routeParams.ad;
    });
  }

  fetchAd(itemId): void {
    this.store.dispatch(new FetchAd(itemId)).subscribe(() => {
      this.ad = this.store.selectSnapshot(state => state.ads.ad);
      this.trade.amount = this.ad.prize;
    });
  }

  openTrade(): void {
    this.trade.initiator = 'joe@gmail.com';
    this.store.dispatch(new CreateTrade(this.trade)).subscribe(() => {
      this.notification.create(
        'success',
        'Successfully initiated the trade',
        'Happy trading'
      );
      this.router.navigate(['/account/trades', this.trade.itemId]);
    });
  }

}
