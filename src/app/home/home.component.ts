import { Component } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout'
import { Observable, Subscription } from 'rxjs'
import { map } from 'rxjs/operators'

import { ProductService, Product } from '../shared/services/product.service';

@Component({
  selector: 'nga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly products$: Observable<Product[]>

  // on xs viewport, only plays 1 column 
  // ......
  readonly breakpointsToColumnsNumber = new Map([
    ['xs', 1],
    ['sm', 2],
    ['md', 3],
    ['lg', 4],
    ['xl', 5]
  ])

  constructor(
    private productService: ProductService,
    private mediaObserver: MediaObserver
  ) {

  }

}
