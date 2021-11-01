import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ads-header',
  template: `
    <div class="listing-header">
      <div nz-row nzAlign="middle" nzJustify="space-between">
        <div nz-col nzXs="20" nzSm="20" nzMd="20" nzLg="20" nzXl="20">
          <h1 class="listing-header-title">Listings</h1>
        </div>
        <div nz-col nzXs="4" nzSm="4" nzMd="4" nzLg="4" nzXl="4">
          <i nz-icon nzType="search" nzTheme="outline" class="listing-search-button" (click)="open()"></i>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class AdsHeaderComponent implements OnInit {

  @Output() openDrawer = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  open(): void {
    this.openDrawer.emit();
  }

}
