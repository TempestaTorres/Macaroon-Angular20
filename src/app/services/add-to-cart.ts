import {Injectable} from '@angular/core';
import {ProductData} from '../../data/product.data';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  private cartItems: ProductData[] = [];

  public addToCart(productData: ProductData): void {

    let found: boolean = false;

    if (this.cartItems.length > 0) {

      for (const product of this.cartItems) {
        if (product.id === productData.id) {
          found = true;
          product.count++;
          break;
        }
      }
    }
    if (!found) {
      this.cartItems.push(productData);
    }
  }

  public deleteFromCart(productData: ProductData): void {

    this.cartItems = this.cartItems.filter(item => item.id !== productData.id);
  }

  public getItemsCount(): number {
    return this.cartItems.length;
  }

  public getItems(): ProductData[] {
    return this.cartItems;
  }

  public getTotalPrice(): number {
    let sum: number = 0;
    this.cartItems.forEach((item: ProductData) => {
      sum += item.count * item.price;
    });
    return sum;
  }
}
