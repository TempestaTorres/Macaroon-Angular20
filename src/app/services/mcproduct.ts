import { Injectable } from '@angular/core';
import {ProductData, Products} from '../../data/product.data';

@Injectable()
export class McProduct {

  protected macaroons: ProductData[];
  constructor() {
    this.macaroons = Products;
  }

  public requestMcProducts(): ProductData[] {
    // Http request
    return this.macaroons;
  }
}
