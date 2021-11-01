import { Component, OnInit, Input } from '@angular/core';

import { Ad } from '../../../models/ad.model';

@Component({
  selector: 'app-ads-table',
  template: `
    <nz-table
      #adsTable
      nzShowPagination
      nzShowSizeChanger
      [nzData]="ads"
    >
      <thead>
        <tr>
          <th>Photo</th>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let ad of adsTable.data">
          <td><img [src]="ad.images[0]" [alt]="ad.title"/></td>
          <td>{{ ad.title }}</td>
          <td>{{ ad.category }}</td>
          <td>{{ ad.prize }}</td>
          <td>
            <i nz-icon nzType="eye" nzTheme="outline"></i>
            <i nz-icon nzType="edit" nzTheme="outline"></i>
            <i nz-icon nzType="delete" nzTheme="outline"></i>
          </td>
        </tr>
      </tbody>
    </nz-table>
  `,
  styles: [
  ]
})
export class AdsTableComponent implements OnInit {

  checked = false;

  @Input() ads: Ad[];

  constructor() { }

  ngOnInit(): void {
  }

}
