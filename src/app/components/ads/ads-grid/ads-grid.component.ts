import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';

import { Ad } from '../../../models/ad.model';

@Component({
  selector: 'app-ads-grid',
  template: `
    <div nz-row [nzGutter]="[16, { xs: 8, sm: 16, md: 24, lg: 32 }]">
      <div nz-col nzXs="24" nzSm="24" nzMd="12" nzLg="8" nzXl="6" *ngFor="let ad of ads">
        <app-ads-card [ad]="ad"></app-ads-card>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class AdsGridComponent implements OnInit {

  @Input() ads: Ad[];

  constructor(private store: Store) { }

  ngOnInit(): void {

  }

}
