import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-categories-sidebar',
  template: `
    <ul nz-menu nzTheme="dark" nzMode="inline">
      <li nz-menu-item *ngFor="let category of categories" (click)="fetchCategory(category.category)">
        {{ category.category }}
      </li>
    </ul>
  `,
  styles: [``]
})
export class CategoriesSidebarComponent implements OnInit {

  @Input() categories: Category[];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  fetchCategory(category) {
    this.router.navigate(['/listings', category]);
  }

}
