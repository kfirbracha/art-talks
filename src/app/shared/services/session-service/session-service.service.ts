import { Injectable } from '@angular/core';
import { Iimage } from 'src/assets/interfaces/image';

export enum SessionKeys {
  image = 'image',
  user = 'user',
}
@Injectable({
  providedIn: 'root',
})
export class SessionServiceService {
  constructor() {}

  public setSession(key: SessionKeys, value: any) {
    return sessionStorage.setItem(key, JSON.stringify(value));
  }
  public getSession(key: SessionKeys) {
    const sessionRes = sessionStorage.getItem(key);

    if (sessionRes) {
      return JSON.parse(sessionRes);
    }
    return sessionRes;
  }
  public clearSession() {
    sessionStorage.clear();
  }
}
