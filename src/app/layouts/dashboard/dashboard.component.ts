import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',

  template: `
    <nz-layout>
      <nz-layout>
        <nz-sider nzCollapsible [(nzCollapsed)]="isCollapsed" [nzTrigger]="null">
          <div class="logo">Kisoko Market</div>
          <app-sidebar></app-sidebar>
        </nz-sider>
        <nz-content>
          <router-outlet></router-outlet>
        </nz-content>
      </nz-layout>
      <nz-footer>
      &copy; {{ year }}, Powered by
      <a href="https://www.kisokolab.com" target="_blank">Kisokolab</a>.
      </nz-footer>
    </nz-layout>
  `,

  styles: [`
    .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
      text-align: center;
      color: #fff;
      text-transform: uppercase;
      line-height: 32px;
    }

    nz-sider {
      height: 100vh;
    }

    nz-content {
      padding-top: 15px;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
      min-height: 30vh;
    }

    nz-footer {
      text-align: right;
    }
  `]
})
export class DashboardComponent implements OnInit {

  year = new Date().getFullYear();

  isCollapsed: false;

  constructor() { }

  ngOnInit(): void {

  }

}
