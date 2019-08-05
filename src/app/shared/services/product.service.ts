import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export interface Product {
  id: number,
  title: string,
  price: number,
  imageUrl: string
  description: string
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor() { }
}
