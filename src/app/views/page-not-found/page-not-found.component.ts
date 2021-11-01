import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <nz-layout>
      <nz-header>
        <app-navbar></app-navbar>
      </nz-header>
      <nz-content>
        <nz-result nzStatus="404" nzTitle="404" nzSubTitle="Sorry, the page you visited does not exist.">
          <div nz-result-extra>
            <a nz-button nzType="primary" href="/">Back Home</a>
          </div>
        </nz-result>
      </nz-content>
      <nz-footer>
      &copy; {{ year }}, Powered by
      <a href="https://www.kisokolab.com" target="_blank">Kisokolab</a>.
      </nz-footer>
    </nz-layout>
  `,
  styles: [`
    nz-content {
      padding-top: 15px;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
      min-height: 80vh;
    }

    nz-footer {
      text-align: right;
    }
  `]
})
export class PageNotFoundComponent implements OnInit {

  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
