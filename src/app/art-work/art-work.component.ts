import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Iimage } from 'src/assets/interfaces/image';
import { IMessage } from '../shared/interfaces/message';
import { ApiService } from '../shared/services/api-service/api.service';
import { GalleryServiceService } from '../shared/services/gallery-service/gallery-service.service';
import {
  SessionKeys,
  SessionServiceService,
} from '../shared/services/session-service/session-service.service';
import { WebSocketService } from '../shared/services/socket-service/socket.service';

@Component({
  selector: 'app-art-work',
  templateUrl: './art-work.component.html',
  styleUrls: ['./art-work.component.scss'],
})
export class ArtWorkComponent implements OnInit, OnDestroy {
  constructor(
    private galleryService: GalleryServiceService,
    private socketServiec: WebSocketService,
    private sessionService: SessionServiceService,
    private apiService: ApiService
  ) {}
  image!: Iimage;
  chatInput: string = '';
  messages: IMessage[] = [];
  userId: string = '';
  subscription: Subscription = new Subscription();
  ngOnInit(): void {
    this.userId = this.sessionService.getSession(SessionKeys.user)._id;
    this.subscription.add(
      this.galleryService.choosenImage.subscribe((res) => {
        if (res) {
          this.image = res;
        }
        this.apiService.getMessages(this.image._id).subscribe((res) => {
          if (res) {
            this.messages.push(...res);
          }
        });
      })
    );

    this.socketServiec.activeUsers$.subscribe((res) => {
      if (res.image_id === this.galleryService.choosenImage.value?._id) {
        this.messages.push(res);
      }
    });
  }
  send() {
    const image = this.sessionService.getSession(SessionKeys.image);
    const user = this.sessionService.getSession(SessionKeys.user);

    this.socketServiec.send({
      msg: this.chatInput,
      user_id: user!._id,
      image_id: image!._id,
    });
    this.chatInput = '';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
