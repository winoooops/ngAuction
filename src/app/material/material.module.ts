import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material'
// import { FlexLayoutModule } from '@angular/flex-layout'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    // FlexLayoutModule
  ]
})
export class MaterialModule { }
