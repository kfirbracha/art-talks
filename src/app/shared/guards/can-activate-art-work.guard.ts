import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { GalleryServiceService } from '../services/gallery-service/gallery-service.service';
import {
  SessionKeys,
  SessionServiceService,
} from '../services/session-service/session-service.service';

@Injectable({
  providedIn: 'root',
})
export class CanActivateArtWorkGuard implements CanActivate {
  constructor(
    private router: Router,
    private galleryService: GalleryServiceService,
    private sessionService: SessionServiceService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const image = this.sessionService.getSession(SessionKeys.image);
    if (!image) {
      this.router.navigateByUrl('/');
    }
    return !!image;
  }
}
