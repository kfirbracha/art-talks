import { Component, OnInit } from '@angular/core';
import { Iimage } from 'src/assets/interfaces/image';
import { IImagesArrRes } from 'src/assets/interfaces/image-array-http';
import { ApiService } from './shared/services/api-service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  title = 'art-talks';

  ngOnInit(): void {
    this.init();
  }

  init() {
    // this.apiService.getImagesArr().subscribe((res: IImagesArrRes) => {
    //   this.arr = res.data;
    // });
  }
}
