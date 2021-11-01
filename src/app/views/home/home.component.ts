import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';

import { Ad } from '../../models/ad.model';
import { Category } from '../../models/category.model';
import { FetchCategories } from '../../store/actions/category.actions';
import { FetchAds, FetchAd } from '../../store/actions/ad.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  images = [
    {
      url: '/assets/images/market.jpg',
      text: 'Market Place',
      description: 'Every single product all under one roof'
    }, {
      url: '/assets/images/freelance.jpg',
      text: 'Freelance',
      description: 'Find The Perfect Freelance Services For Your Business'
    }
  ];

  categories: Category[];
  ads: Ad[];

  constructor(private store: Store, private router: Router) { }

  email: string;

  ngOnInit(): void {
    this.store.dispatch(new FetchCategories()).subscribe(() => {
      this.categories = this.store.selectSnapshot(state => state.categories.categories);
    });

    this.store.dispatch(new FetchAds()).subscribe(() => {
      this.ads = this.store.selectSnapshot(state => state.ads.ads);
    });
  }

  fetchAd(ad: string) {
    this.store.dispatch(new FetchAd(ad)).subscribe(() => {
      this.router.navigate(['ads/', ad]);
    });
  }

  submitForm() {
  }
}
