import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { ApiService } from '../api-service/api.service';
import {
  SessionKeys,
  SessionServiceService,
} from '../session-service/session-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private sessionService: SessionServiceService,
    private apiService: ApiService
  ) {}

  public createUser(user: IUser) {
    this.apiService.createUser(user);
  }
  public login(user: IUser) {
    return this.apiService.login(user).subscribe((res) => {
      if (res) {
        this.sessionService.setSession(SessionKeys.user, res._id);
      }
      return res;
    });
  }
  public logout() {
    this.sessionService.clearSession();
  }
}
