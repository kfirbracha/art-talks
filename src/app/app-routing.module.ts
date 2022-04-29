import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtWorkComponent } from './art-work/art-work.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CanActivateArtWorkGuard } from './shared/guards/can-activate-art-work.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: GalleryComponent },
  {
    path: 'art-work/:id',
    canActivate: [CanActivateArtWorkGuard],
    component: ArtWorkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
