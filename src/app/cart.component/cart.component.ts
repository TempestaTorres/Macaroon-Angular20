import {Component, Input, signal,WritableSignal} from '@angular/core';
import {AddToCartService} from '../services/add-to-cart';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  protected readonly imgUrl: string = '/assets/images/add-to-cart.svg';

  @Input()
  title: string = 'Your Cart';

  //Signals
  public openCart: WritableSignal<boolean> = signal(false);

  constructor(public cartService: AddToCartService) {

  }

  public addToCart(): boolean {
    return this.cartService.getItemsCount() <= 0;

  }

  public openActiveCart(e: Event): void {
    this.openCart.update(value => !value);
    e.preventDefault();
  }
  public closeActiveCart(e: Event): void {
    this.openCart.set(false);
    e.preventDefault();
  }

  public payToCart(e: Event): void {
    e.preventDefault();
  }
}
