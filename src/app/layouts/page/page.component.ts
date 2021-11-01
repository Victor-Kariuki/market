import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';

import { Category } from '../../models/category.model';
import { FetchCategory, FetchCategories } from '../../store/actions/category.actions';

@Component({
  selector: 'app-page',
  template: `
    <nz-layout>
      <nz-header>
        <div class="logo">Kisoko Market</div>
        <app-navbar></app-navbar>
      </nz-header>
      <nz-content>
        <router-outlet></router-outlet>
      </nz-content>
      <nz-footer>
        <div>
          &copy; {{ year }}, Powered by
          <a href="https://www.kisokolab.com" target="_blank">Kisokolab</a>.
        </div>
      </nz-footer>
    </nz-layout>
  `,
  styles: [`
    .logo {
      width: 120px;
      height: 31px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px 30px 16px 0;
      float: left;
      line-height: 31px;
      color: #fff;
      text-align: center;
      text-transform: uppercase;
    }

    nz-content {
      min-height: 90vh;
    }

    nz-footer {
      text-align: center;
    }

    nz-sider {
      overflow: auto;
      max-height: 100%;
    }

    @media screen and (max-width: 540px) {
      .hidden-phone {
        display: none;
      }
    }
  `]
})
export class PageComponent implements OnInit {

  year = new Date().getFullYear();
  categories: Category[];
  isCollapsed: boolean;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchCategories()).subscribe(() => {
      this.categories = this.store.selectSnapshot(state => state.categories.categories);
    });

    this.isCollapsed = true;
  }

  fetchCategoryAds(category) {
    this.store.dispatch(new FetchCategory(category)).subscribe(() => {
      this.router.navigate(['listings/', category]);
    });
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
