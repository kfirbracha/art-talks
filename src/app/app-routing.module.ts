import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtWorkComponent } from './art-work/art-work.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './shared/guards/auth-guard.guard';
import { CanActivateArtWorkGuard } from './shared/guards/can-activate-art-work.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardGuard],
    pathMatch: 'full',
    component: GalleryComponent,
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'art-work/:id',
    canActivate: [AuthGuardGuard, CanActivateArtWorkGuard],
    component: ArtWorkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
