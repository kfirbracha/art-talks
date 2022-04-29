import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatInputModule, MatIconModule],
  exports: [MatCardModule, MatInputModule, MatIconModule],
})
export class MaterialModule {}
