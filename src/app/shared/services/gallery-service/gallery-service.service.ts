import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Iimage } from 'src/assets/interfaces/image';
import {
  SessionKeys,
  SessionServiceService,
} from '../session-service/session-service.service';

@Injectable({
  providedIn: 'root',
})
export class GalleryServiceService {
  choosenImage: BehaviorSubject<Iimage | null> =
    new BehaviorSubject<Iimage | null>(null);
  constructor(private sessionService: SessionServiceService) {
    this.initSession();
  }

  private initSession() {
    const image = this.sessionService.getSession(SessionKeys.image);
    console.log({ image });

    if (image) {
      this.choosenImage.next(JSON.parse(image));
    }
  }
}
