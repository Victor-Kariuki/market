import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <div class="listing-header"></div>
     <div class="container">
      <div nz-row [nzGutter]="[32, { xs: 8, sm: 16, md: 24, lg: 32 }]" nzJustify="center" nzAlign="middle">
        <div nz-col nzXs="24" nzSm="24" nzMd="24" nzLg="20" nzXl="20">
          <app-ads-form></app-ads-form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .form-header {
      background: #fff;
    }
  `]
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
