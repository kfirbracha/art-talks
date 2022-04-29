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

@Injectable({
  providedIn: 'root',
})
export class CanActivateArtWorkGuard implements CanActivate {
  constructor(
    private router: Router,
    private galleryService: GalleryServiceService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.galleryService.choosenImage.value) {
      this.router.navigateByUrl('/');
    }
    return !!this.galleryService.choosenImage.value;
  }
}
