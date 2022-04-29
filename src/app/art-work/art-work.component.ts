import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Iimage } from 'src/assets/interfaces/image';
import { GalleryServiceService } from '../shared/services/gallery-service/gallery-service.service';
import { WebSocketService } from '../shared/services/socket-service/socket.service';

@Component({
  selector: 'app-art-work',
  templateUrl: './art-work.component.html',
  styleUrls: ['./art-work.component.scss'],
})
export class ArtWorkComponent implements OnInit {
  constructor(
    private galleryService: GalleryServiceService,
    private socketServiec: WebSocketService
  ) {}
  image!: Iimage;
  chatInput: string = '';
  messages: string[] = [];
  ngOnInit(): void {
    this.image = this.galleryService.choosenImage.value!;
    this.socketServiec.activeUsers$.subscribe((res) => {
      console.log({ res });
      if (res.url === this.galleryService.choosenImage.value?.url) {
        this.messages.push(res.msg);
      }
    });
  }
  send() {
    this.socketServiec.send(this.chatInput);
    this.chatInput = '';
  }
}
