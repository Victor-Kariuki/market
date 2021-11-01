import { Trade } from '../../models/trade.model';

export class CreateTrade {
  static readonly type = '[Trade] CreateTrade';
  constructor(public payload) {}
}

export class FetchTrade {
  static readonly type = '[Trade] FetchTrade';
  constructor(public payload) {}
}

export class FundEscrow {
  static readonly type = '[Trade] fundEscrow';
  constructor(public payload: Trade) {}
}

export class CompleteOpenTrade {
  static readonly type = '[Trade] CompleteOpenTrade';
  constructor(public payload: string) {}
}

export class CancelOpenTrade {
  static readonly type = '[Trade] CancelOpenTrade';
  constructor(public payload: string) {}
}

export class RaiseComplaintOnTrade {
  static readonly type = '[Trade] RaiseComplaintOnTrade';
  constructor(public payload: string) {}
}
