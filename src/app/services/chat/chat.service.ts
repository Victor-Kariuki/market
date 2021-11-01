import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

import { Message } from '../../models/message.model';
import { Trade } from '../../models/trade.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  public typing() {
    this.socket.emit('typing');
  }

  public openTrade(trade: Trade) {
    this.socket.emit('opentrade', trade);
  }

  public createOffer(offer: Trade) {
    this.socket.emit('Offer', offer);
  }

  public createMessage(message: string) {
    this.socket.emit('connection', message);
  }

  public endChat() {
    this.socket.emit('disconnect');
  }

  public fetchMessages = () => {
    return new Observable((observer) => {
      this.socket.on('message', (message: Message) => {
        observer.next(message);
      });
    });
  }
}
