import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Message } from '../../models/message.model';
import { CreateMessage, FetchMessages } from '../actions/chat.action';
import { ChatService } from '../../services/chat/chat.service';

export class ChatStateModel {
  messages: Message[];
  message: Message;
  loading: boolean;
}

@State<ChatStateModel>({
  name: 'chats',
  defaults: {
    messages: [],
    message: null,
    loading: false,
  },
})

@Injectable()
export class ChatState {

  @Selector()
  static messages(state: ChatStateModel) {
    return state.messages;
  }

  @Selector()
  static loading(state: ChatStateModel) {
    return state.loading;
  }

  constructor(private chatService: ChatService) {}

  @Action(CreateMessage)
  createMessage(ctx: StateContext<ChatStateModel>, action: CreateMessage) {
    return this.chatService.createMessage(action.payload);
  }

  @Action(FetchMessages)
  fetchMessages(ctx: StateContext<ChatStateModel>, action: FetchMessages) {
    const state = ctx.getState();
    let messages: Message[] = [];

    return this.chatService.fetchMessages()
      .pipe(map(res => {
        // tslint:disable-next-line: no-string-literal
        messages = res['message'];
        ctx.setState({
          ...state,
          messages,
        });
      }));
  }
}
