import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';

import { Category } from '../../../models/category.model';
import { FetchCategories } from '../../../store/actions/category.actions';

@Component({
  selector: 'app-tiles',
  template: `
    <div class="listing-header">
      <div nz-row nzAlign="middle" nzJustify="space-between">
        <div nz-col nzXs="20" nzSm="20" nzMd="20" nzLg="20" nzXl="20">
          <h1 class="listing-header-title">Categories</h1>
        </div>
        <div nz-col nzXs="4" nzSm="4" nzMd="4" nzLg="4" nzXl="4">
          <i nz-icon nzType="search" nzTheme="outline" class="listing-search-button"></i>
        </div>
      </div>
    </div>

    <div nz-row nzAlign="middle" nzJustify="center" class="hero"
      [nzGutter]="[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]">
      <div nz-col nzXs="24" nzSm="24" nzMd="12" nzLg="8" nzXl="8" *ngFor="let category of categories">
        <nz-card nzHoverable [ngStyle]="{
          'background': 'linear-gradient(65deg, rgba(0, 21, 41, 0.9), rgba(64, 169, 255, 0.3)),
            url('+'/assets/images/'+category['icon']+'.jpg'+')',
          'background-size': 'cover',
          'background-position': 'center',
          'background-repeat': 'no-repeat'
        }" (click)="fetchCategoryAds(category['category'])">
          <i nz-icon [nzType]="category['icon']" nzTheme="outline" class="category-title-icon"></i>
          <h3 class="category-title">{{category['category']}}</h3>
          <p class="category-count">ads posted.</p>
        </nz-card>
      </div>
    </div>
  `,
  styles: [`
    .category-title-icon {
      font-size: 2.5em;
      color: #fff;
    }

    .category-title {
      font-family: 'Raleway', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 1.5em;
      font-weight: 500;
      text-transform: capitalize;
      color: #fff;
    }

    .category-count {
      color: #fff;
    }
  `]
})
export class TilesComponent implements OnInit {

  categories: Category[];

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchCategories()).subscribe(() => {
      this.categories = this.store.selectSnapshot(state => state.categories.categories);
    });
  }

  fetchCategoryAds(category) {
    this.router.navigate(['/listings', category]);
  }
}
