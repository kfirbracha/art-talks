import { Component, OnInit } from '@angular/core';
import { Iimage } from 'src/assets/interfaces/image';
import { IImagesArrRes } from 'src/assets/interfaces/image-array-http';
import { ApiService } from './shared/services/api-service/api.service';
import { GalleryServiceService } from './shared/services/gallery-service/gallery-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private galleryService: GalleryServiceService) {}
  title = 'art-talks';

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.galleryService.initSession();
  }
}
