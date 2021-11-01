import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

import { Ad } from '../../../models/ad.model';
import { UpdateAdViews } from '../../../store/actions/ad.actions';

@Component({
  selector: 'app-ads-card',
  template: `
    <nz-card [nzCover]="coverTemplate" nzHoverable [nzActions]="[category, price]" [nzBordered]="false"
      (click)="viewAd(ad.itemId)">
      <h3 class="heading">{{ ad.title }}</h3>
      <p nz-typography nzEllipsis nzExpandable [nzEllipsisRows]="2">{{ ad['description'] }}</p>
      <nz-rate [ngModel]="5"></nz-rate>({{ ad['views'] }})
    </nz-card>

    <ng-template #coverTemplate>
      <nz-carousel nzAutoPlay>
        <div nz-carousel-content *ngFor="let img of ad['images']" class="ad-carousel-content">
          <img [src]="img" alt="" class="nz-carousel-ad-image">
        </div>
      </nz-carousel>
      <div class="divider"></div>
    </ng-template>

    <ng-template #category>
      <nz-tag [nzColor]="'blue'">
        <i nz-icon nzType="sliders" nzTheme="outline"></i>&nbsp;{{ ad['category'] }}
      </nz-tag>
    </ng-template>

    <ng-template #price>
      <nz-tag [nzColor]="'green'">{{ ad['prize'] | currency }}</nz-tag>
    </ng-template>
  `,

  styles: [`
    .ad-carousel-content {
      width:100%;
      max-height: 240px;
    }

    .nz-carousel-ad-image {
      height: 100%;
      width: 100%;
    }

    .divider {
      border: 1px solid #F0F2F5;
    }
  `]
})

export class AdsCardComponent implements OnInit {

  @Input() ad: Ad;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
  }

  viewAd(ad) {
    this.store.dispatch(new UpdateAdViews(ad)).subscribe(() => {
      this.router.navigate(['ads/', ad]);
    });
  }

}
