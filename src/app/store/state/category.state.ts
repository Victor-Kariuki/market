import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { State, Selector, Action, StateContext } from '@ngxs/store';

import { Category } from '../../models/category.model';
import { FetchCategories, FetchCategory, CreateCategory } from '../actions/category.actions';
import { CategoriesService } from '../../services/categories/categories.service';

export class CategoryStateModel {
  categories: Category[];
  loading: boolean;
}

@State<CategoryStateModel>({
  name: 'categories',
  defaults: {
    categories: [],
    loading: true
  },
})



@Injectable()
export class CategoryState {


  @Selector()
  static categories(state: CategoryStateModel): Category[] {
    return state.categories;
  }

  @Selector()
  public static loading(state: CategoryStateModel) {
    return state.loading;
  }

  constructor(private categoriesService: CategoriesService) {}

  @Action(FetchCategories)
  fetchCategories(ctx: StateContext<CategoryStateModel>, action: FetchCategories) {
    const state = ctx.getState();
    let categories: Category[] = [];
    return this.categoriesService.fetchCategories()
    .pipe(map(res => {
      // tslint:disable-next-line: no-string-literal
      categories = res['message'];
      ctx.setState({
        ...state,
        categories,
        loading: false
      });
    }));
  }

  @Action(FetchCategory)
  fetchCategory(ctx: StateContext<CategoryStateModel>, action: FetchCategory) {
    return this.categoriesService.fetchCategory(action.payload);
  }

  @Action(CreateCategory)
  createCategory(ctx: StateContext<CategoryStateModel>, action: CreateCategory) {
    return this.categoriesService.createCategory(action.payload);
  }
}
