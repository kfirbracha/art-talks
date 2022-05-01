import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Socket } from 'ngx-socket-io';
import { GalleryServiceService } from '../gallery-service/gallery-service.service';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  activeUsers$ = this.socket.fromEvent<any>('message');

  constructor(
    private socket: Socket,
    private galleryService: GalleryServiceService
  ) {}

  sendMessage(msg: any) {
    this.socket.emit('message', msg);
  }
  close() {
    this.socket.disconnect();
  }

  public send(payload: any) {
    this.sendMessage(payload);
  }
}
