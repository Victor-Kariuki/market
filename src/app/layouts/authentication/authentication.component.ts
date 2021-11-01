import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  template: `
  <nz-layout>
    <nz-header>
      <div class="logo">Kisoko Market</div>
      <app-navbar></app-navbar>
    </nz-header>
    <nz-content>
      <div nz-row>
        <div nz-col nzXs="24" nzSm="24" nzMd="24" nzLg="8" nzXl="8" class="content">
          <router-outlet></router-outlet>
        </div>
        <div nz-col nzXs="0" nzSm="0" nzMd="0" nzLg="16" nzXl="16">
          <nz-carousel nzAutoPlay class="landing-carousel">
            <div nz-carousel-content *ngFor="let image of images">
              <div [ngStyle]= "{
                    'background-image': 'url(' + image.url + ')',
                    'background-size': 'cover',
                    'background-position': 'center',
                    'background-repeat': 'no-repeat',
                    'height': '100vh'
                  }">
              </div>
            </div>
          </nz-carousel>
        </div>
      </div>
    </nz-content>
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
      min-height: 70vh;
      background: #fff;
    }
  `]
})
export class AuthenticationComponent implements OnInit {

  images = [
    {
      url: '/assets/images/market.jpg',
      text: 'Market Place'

    }, {
      url: '/assets/images/freelance.jpg',
      text: 'Freelance'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
