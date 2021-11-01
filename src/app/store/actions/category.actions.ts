import {Category} from '../../models/category.model';

export class FetchCategories {
  static readonly type = '[Category] FetchCategories';
  constructor() {}
}

export class FetchCategory {
  static readonly type = '[Category] FetchCategory';
  constructor(public payload: string) {}
}


export class CreateCategory {
  static readonly type = '[Category] CreateCategory';
  constructor(public payload: Category) {}
}
