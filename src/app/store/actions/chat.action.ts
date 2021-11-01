import { Message } from '../../models/message.model';

export class CreateMessage {
  static readonly type = '[Chat] CreateMessage';
  constructor(public payload: string) {}
}

export class FetchMessages {
  static readonly type = '[Chat] FetchMessages';
  constructor() {}
}
