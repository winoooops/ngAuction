// using lazy routing so I need this module to serve as a middleware

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatGridListModule } from '@angular/material/grid-list'
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ]),
    FlexLayoutModule,
    MatGridListModule
  ]
})
export class HomeModule { }
