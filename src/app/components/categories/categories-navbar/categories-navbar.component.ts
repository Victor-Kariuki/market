import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-categories-navbar',
  template: `
    <ul nz-menu nzMode="horizontal" nzTheme="light">
      <li nz-menu-item *ngFor="let category of categories" (click)="fetchCategory(category.category)">
        {{ category.category }}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class CategoriesNavbarComponent implements OnInit {

  @Input() categories: Category[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  fetchCategory(category: string): void {
    this.router.navigate(['/listings', category]);
  }

}
