import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
export class GalleryComponent implements OnInit {
  keywords = '';
  arr: Iimage[] = [];
  constructor(
    private galleryService: GalleryServiceService,
    private sessionService: SessionServiceService,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.apiService.getImagesArr().subscribe((res) => {
      console.log({ res });
      this.arr = res;
    });
    console.log('init');
  }

  onCardClick(image: Iimage) {
    console.log(image);

    this.galleryService.choosenImage.next(image);
    this.sessionService.setSession(SessionKeys.image, image);
    this.router.navigate([`${Routes.ArtWork}/${image.imageName}`]);
  }
}
