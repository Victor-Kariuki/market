import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-categories-grid',
  template: `
    <div nz-row [nzGutter]="[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]">
      <div nz-col nzXs="12" nzSm="12" nzMd="6" nzLg="4" nzXl="4" *ngFor="let category of categories">
        <nz-card nzHoverable (click)="fetchCategory(category['category'])" style="text-align: center;">
          <nz-space nzDirection="vertical" nzSize="large">
            <nz-space-item>
              <i nz-icon [nzType]="category['icon']" nzTheme="twotone" class="category-icon"></i>
            </nz-space-item>
            <nz-space-item>
              <h3 class="heading">{{category['category']}}</h3>
            </nz-space-item>
          </nz-space>
        </nz-card>
      </div>
    </div>
  `,
  styles: [`
    .category-icon {
      font-size: 3em;
    }
  `]
})
export class CategoriesGridComponent implements OnInit {

  @Input() categories: Category[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  fetchCategory(category: string) {
    this.router.navigate(['/listings', category]);
  }

}
