import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Iimage } from 'src/assets/interfaces/image';
import { Routes } from '../shared/enums/routes';
import { ApiService } from '../shared/services/api-service/api.service';
import { GalleryServiceService } from '../shared/services/gallery-service/gallery-service.service';
import {
  SessionKeys,
  SessionServiceService,
} from '../shared/services/session-service/session-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit, OnDestroy {
  keywords = '';
  arr: Iimage[] = [];
  constructor(
    private galleryService: GalleryServiceService,
    private sessionService: SessionServiceService,
    private router: Router,
    private apiService: ApiService
  ) {}
  subscription: Subscription = new Subscription();
  ngOnInit(): void {
    this.subscription.add(
      this.galleryService.imageArr.subscribe((res) => (this.arr = res || []))
    );
  }

  onCardClick(image: Iimage) {
    this.galleryService.choosenImage.next(image);
    this.sessionService.setSession(SessionKeys.image, { _id: image._id });
    this.router.navigate([`${Routes.ArtWork}/${image.imageName}`]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
