import { Injectable } from '@angular/core';
import { Iimage } from 'src/assets/interfaces/image';

export enum SessionKeys {
  image = 'image',
}
@Injectable({
  providedIn: 'root',
})
export class SessionServiceService {
  constructor() {}

  public setSession(key: SessionKeys, value: Iimage) {
    return sessionStorage.setItem(key, JSON.stringify(value));
  }
  public getSession(key: SessionKeys) {
    return sessionStorage.getItem(key);
  }
}
