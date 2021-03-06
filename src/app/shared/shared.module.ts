import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { BaseCardComponent } from './components/base-card/base-card.component';
import { MaterialCardComponent } from './components/material-card/material-card.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { GlobalErrorComponent } from './components/global-error/global-error.component';

const modules = [MaterialModule, FormsModule];
const components = [
  BaseCardComponent,
  MaterialCardComponent,
  GlobalErrorComponent,
];
const pipes = [FilterPipe];
@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...modules, ...components, ...pipes],
})
export class SharedModule {}
