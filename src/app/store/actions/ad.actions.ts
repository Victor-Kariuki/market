import { Ad } from '../../models/ad.model';

export class FetchAds {
  static readonly type = '[Ad] FetchAds';
  constructor() {}
}

export class FetchAd {
  static readonly type = '[Ad] FetchAd';
  constructor(public payload: string) {}
}

export class CreateAd {
  static readonly type = '[Ad] CreateAd';
  constructor(public payload: Ad) {}
}

export class FetchUserProfile {
  static readonly type = '[Ad] FetchUserProfile';
  constructor(public payload: string) {}
}

export class FetchCategoryAds {
  static readonly type = '[Ad] FetchCategoryAds';
  constructor(public payload: string) {}
}

export class UpdateAd {
  static readonly type = '[Ad]  UpdateAd';
  constructor(public payload: Ad, public adId: string) {}
}

export class DeleteAd {
  static readonly type = '[Ad] DeleteAd';
  constructor(public payload: string) {}
}

export class UpdateAdViews {
  static readonly type = '[Ad] UpdateAdViews';
  constructor(public payload: string) {}
}
