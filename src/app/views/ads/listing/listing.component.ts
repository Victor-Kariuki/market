import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { Ad } from '../../../models/ad.model';
import { Category } from '../../../models/category.model';
import { FetchAds } from '../../../store/actions/ad.actions';
import { FetchCategories } from 'src/app/store/actions/category.actions';

@Component({
  selector: 'app-listing',
  template: `
    <div nz-row nzAlign="middle" nzJustify="center" class="is-white-bg">
      <div nz-col nzXs="0" nzSm="0" nzMd="20" nzLg="20" nzXl="20">
        <div *ngIf="categories">
          <app-categories-navbar [categories]="categories" class="hidden-phone"></app-categories-navbar>
        </div>
      </div>
    </div>

    <app-ads-header (openDrawer)="open()"></app-ads-header>
    <app-ads-search (closeDrawer)="close()" [visible]="visible"></app-ads-search>

    <div nz-row nzJustify="center" nzAlign="middle" class="hero"
      [nzGutter]="[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]">
      <div nz-col nzXs="24" nzSm="24" nzMd="24" nzLg="24" nzXl="24">
        <div *ngIf="ads.length > 0 ;else emptyContainer">
          <app-ads-grid [ads]="ads"></app-ads-grid>
        </div>
        <template #emptyContainer>
          <nz-empty></nz-empty>
        </template>
      </div>
    </div>
  `,

  styles: [
  ]
})

export class ListingComponent implements OnInit {

  ads: Ad[];
  categories: Category[];
  visible = false;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchAds()).subscribe(() => {
      this.ads = this.store.selectSnapshot(state => state.ads.ads);
    });

    this.store.dispatch(new FetchCategories()).subscribe(() => {
      this.categories = this.store.selectSnapshot(state => state.categories.categories);
    });
  }

  open() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

}
