import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Iimage } from 'src/assets/interfaces/image';
import { ApiService } from '../api-service/api.service';
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
  imageArr: BehaviorSubject<Iimage[] | null> = new BehaviorSubject<
    Iimage[] | null
  >(null);
  constructor(
    private apiService: ApiService,
    private sessionService: SessionServiceService
  ) {
    this.initSession();
  }

  public initSession() {
    this.apiService.getImagesArr().subscribe((res) => {
      this.imageArr.next(res);
      const image = this.sessionService.getSession(SessionKeys.image);

      if (image) {
        this.choosenImage.next(res.find((a) => a._id === image._id) || null);
      }
    });
  }
}
