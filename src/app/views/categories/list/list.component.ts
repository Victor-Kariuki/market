import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';

import { Ad } from '../../../models/ad.model';
import { FetchCategoryAds } from '../../../store/actions/ad.actions';

@Component({
  selector: 'app-list',
  template: `
    <div class="listing-header">
      <div nz-row nzAlign="middle" nzJustify="space-between">
        <div nz-col nzXs="20" nzSm="20" nzMd="20" nzLg="20" nzXl="20">
          <h1 class="listing-header-title">Listings</h1>
          <p class="listing-header-breadcrumbs">
            Listings <i nz-icon nzType="right" nzTheme="outline"></i> {{ category }}
          </p>
        </div>
        <div nz-col nzXs="4" nzSm="4" nzMd="4" nzLg="4" nzXl="4">
          <i nz-icon nzType="search" nzTheme="outline" class="listing-search-button"></i>
        </div>
      </div>
    </div>

    <div nz-row nzAlign="middle" nzJustify="center" class="hero"
      [nzGutter]="[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]">
      <div nz-col nzXs="24" nzSm="24" nzMd="24" nzLg="24" nzXl="24">
        <app-ads-grid [ads]="ads"></app-ads-grid>
      </div>
    </div>

    <div nz-row nzAlign="middle" nzJustify="center"
      [nzGutter]="[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]">
      <div nz-col nzXs="8" nzSm="8" nzMd="8" nzLg="8" nzXl="8">
        <nz-pagination [nzPageIndex]="1" [nzTotal]="50" class="listing-pagination" *ngIf="ads.length > 0">
        </nz-pagination>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ListComponent implements OnInit {

  ads: Ad[];
  category: string;

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.fetchAds(routeParams.category);
      this.category = routeParams.category;
    });
  }

  fetchAds(category): void {
    this.store.dispatch(new FetchCategoryAds(category)).subscribe(() => {
      this.ads = this.store.selectSnapshot(state => state.ads.ads);
    });
  }

}
