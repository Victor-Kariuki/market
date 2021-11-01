import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ads-search',
  template: `
    <nz-drawer [nzClosable]="false" [nzVisible]="visible" nzPlacement="right" nzTitle="Ad Search" (nzOnClose)="close()">
    <form nzForm #searchForm="ngForm" (ngSubmit)="submitForm()">
    </form>
    </nz-drawer>
  `,
  styles: [
  ]
})
export class AdsSearchComponent implements OnInit {

  @Input() visible;

  @Output() closeDrawer = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.closeDrawer.emit();
  }

  submitForm(): void {

  }

}
