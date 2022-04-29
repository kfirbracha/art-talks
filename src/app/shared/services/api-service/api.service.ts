import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IImagesArrRes } from 'src/assets/interfaces/image-array-http';
import { Iimage } from 'src/assets/interfaces/image';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getImagesArr(): Observable<Iimage[]> {
    return this.http.get(environment.BASE_URL + '/getImages') as Observable<
      Iimage[]
    >;
  }
}
