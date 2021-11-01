import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';


import { Ad } from '../../models/ad.model';
import { FetchAds, FetchAd, CreateAd, FetchUserProfile, UpdateAd, DeleteAd, FetchCategoryAds, UpdateAdViews } from '../actions/ad.actions';
import { AdsService } from '../../services/ads/ads.service';


export class AdStateModel {
  ads: Ad[];
  ad: Ad;
  loading: boolean;
}

@State<AdStateModel>({
  name: 'ads',
  defaults: {
    ads: [],
    ad: null,
    loading: false,
  },
})

@Injectable()
export class AdState {

  @Selector()
  static ads(state: AdStateModel) {
    return state.ads;
  }

  @Selector()
  static loading(state: AdStateModel) {
    return state.loading;
  }

  constructor(private adsService: AdsService) {}

  @Action(FetchAds)
  fetchAds(ctx: StateContext<AdStateModel>, action: FetchAds) {
    const state = ctx.getState();
    let ads: Ad[] = [];
    return this.adsService.fetchAds()
      .pipe(map(res => {
        // tslint:disable-next-line: no-string-literal
        ads = res['message'];
        ctx.setState({
          ...state,
          ads,
          loading: false
        });
      }));
  }

  @Action(FetchAd)
  fetchAd(ctx: StateContext<AdStateModel>, action: FetchAd) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true
    });
    let ad: Ad = null;
    return this.adsService.fetchAd(action.payload)
      .pipe(map(res => {
        // tslint:disable-next-line: no-string-literal
        ad = res['message'][0];
        ctx.setState({
          ...state,
          ad,
          loading: false,
        });
      }));
  }

  @Action(CreateAd)
  createAd(ctx: StateContext<AdStateModel>, action: CreateAd) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true
    });
    return this.adsService.createAd(action.payload).pipe(
      tap(() => {
        ctx.setState({
          ...state,
          loading: false,
        });
      })
    );
  }

  @Action(FetchUserProfile)
  fetchUserProfile(ctx: StateContext<AdStateModel>, action: FetchUserProfile) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true
    });
    let ads: Ad[] = [];
    return this.adsService.fetchUserProfile(action.payload).pipe(
      map((res) => {
        // tslint:disable-next-line: no-string-literal
        ads = res['message'];
        ctx.setState({
          ...state,
          loading: false,
          ads
        });
      })
    );
  }

  @Action(FetchCategoryAds)
  fetchCategoryAds(ctx: StateContext<AdStateModel>, action: FetchCategoryAds) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true
    });
    let ads: Ad[] = [];
    return this.adsService.fetchCategoryAds(action.payload).pipe(
      map((res) => {
        // tslint:disable-next-line: no-string-literal
        ads = res['message'];
        ctx.setState({
          ...state,
          loading: false,
          ads
        });
      })
    );
  }

  @Action(UpdateAd)
  updateAd(ctx: StateContext<AdStateModel>, action: UpdateAd) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true,
    });

    return this.adsService.updateAd(action.payload).pipe(
      map((res) => {
        ctx.setState({
          ...state,
          loading: false,
        });
      })
   );
  }

  @Action(DeleteAd)
  deleteAd(ctx: StateContext<AdStateModel>, action: DeleteAd) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true,
    });

    return this.adsService.deleteAd(action.payload).pipe(
      map((res) => {
        ctx.setState({
          ...state,
          loading: false,
        });
      })
    );
  }

  @Action(UpdateAdViews)
  updateAdViews(ctx: StateContext<AdStateModel>, action: UpdateAdViews) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true,
    });

    return this.adsService.updateAdViews(action.payload).pipe(
      map((res) => {
        ctx.setState({
          ...state,
          loading: false
        });
      })
    );
  }

}
