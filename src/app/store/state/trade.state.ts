import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { Trade } from '../../models/trade.model';
import { CreateTrade, FetchTrade, FundEscrow, CompleteOpenTrade, CancelOpenTrade, RaiseComplaintOnTrade } from '../actions/trade.actions';
import { TradesService } from '../../services/trades/trades.service';

export class TradeStateModel {
  trades: Trade[];
  trade: Trade;
  loading: boolean;
}

@State<TradeStateModel>({
  name: 'trades',
  defaults: {
    trades: [],
    trade: null,
    loading: false
  },
})

@Injectable()
export class TradeState {

  @Selector()
  static trades(state: TradeStateModel) {
    return state.trades;
  }

  @Selector()
  static trade(state: TradeStateModel) {
    return state.trade;
  }

  @Selector()
  static loading(state: TradeStateModel) {
    return state.loading;
  }

  constructor(private tradesService: TradesService) {}

  @Action(CreateTrade)
  createTrade(ctx: StateContext<TradeStateModel>, action: CreateTrade) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true,
    });
    return this.tradesService.createTrade(action.payload)
      .pipe(map(res => {
        ctx.setState({
          ...state,
          loading: false,
        });
      }));
  }

  @Action(FetchTrade)
  fetchTrade(ctx: StateContext<TradeStateModel>, action: FetchTrade) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true,
    });
    let trade: Trade;
    return this.tradesService.fetchTrade(action.payload)
      .pipe(map(res => {
        // tslint:disable-next-line: no-string-literal
        trade = res['message'][0];
        ctx.setState({
          ...state,
          trade,
          loading: false,
        });
      }));
  }

  @Action(FundEscrow)
  fundEscrow(ctx: StateContext<TradeStateModel>, action: FundEscrow) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true,
    });
    return this.tradesService.fundEscrow(action.payload)
      .pipe(map(res => {
        ctx.setState({
          ...state,
          loading: true,
        });
      }));
  }

  @Action(CompleteOpenTrade)
  completeOpenTrade(ctx: StateContext<TradeStateModel>, action: CompleteOpenTrade) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true,
    });
    return this.tradesService.completeOpenTrade(action.payload)
      .pipe(map(res => {
        ctx.setState({
          ...state,
          loading: true,
        });
      }));
  }

  @Action(CancelOpenTrade)
  cancelOpenTrade(ctx: StateContext<TradeStateModel>, action: CancelOpenTrade) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true,
    });
    return this.tradesService.cancelOpenTrade(action.payload)
      .pipe(map(res => {
        ctx.setState({
          ...state,
          loading: true,
        });
      }));
  }

  @Action(RaiseComplaintOnTrade)
  raiseComplaintOnTrade(ctx: StateContext<TradeStateModel>, action: RaiseComplaintOnTrade) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true,
    });
    return this.tradesService.raiseComplaintOnTrade(action.payload)
      .pipe(map(res => {
        ctx.setState({
          ...state,
          loading: true,
        });
      }));
  }
}
