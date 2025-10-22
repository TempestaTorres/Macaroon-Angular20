import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductData} from '../../data/product.data';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  protected buttonLabel: string = 'Заказать';

  @Input({required: true})
  public product: ProductData;

  @Output('productSelected')
  protected cardEmitter: EventEmitter<ProductData> = new EventEmitter<ProductData>();

  constructor() {
    this.product = {
      id: 0,
      name: 'unknown',
      count: 0,
      price: 0,
    }
  }

  protected buttonClick(): void {
    this.cardEmitter.emit(this.product);
  }
}
