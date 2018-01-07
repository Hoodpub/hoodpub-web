import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatMenuModule,
         MatIconModule, MatCardModule, MatGridListModule } from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatGridListModule, MatMenuModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatGridListModule, MatMenuModule],
})
export class MaterialModule { }
