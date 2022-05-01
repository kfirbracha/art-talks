import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IImagesArrRes } from 'src/assets/interfaces/image-array-http';
import { Iimage } from 'src/assets/interfaces/image';
import { apiRoutes } from '../../apiRoutes';
import { IUser } from '../../interfaces/user';
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

  createUser(req: IUser): Observable<any> {
    return this.http.post(
      environment.BASE_URL + apiRoutes.CREATE_USER,
      req
    ) as Observable<any>;
  }

  login(req: IUser): Observable<any> {
    return this.http.post(
      environment.BASE_URL + apiRoutes.LOGIN,
      req
    ) as Observable<any>;
  }
  getMessages(req: string): Observable<any> {
    return this.http.post(environment.BASE_URL + apiRoutes.GET_MESSAGES, {
      image_id: req,
    }) as Observable<any>;
  }
}
