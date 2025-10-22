import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductComponent} from './product.component/product.component';
import {ProductData} from '../data/product.data';
import {FormsModule} from '@angular/forms';
import {User} from '../data/user.data';
import {ModalComponent} from './modal.component/modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {McInput} from './directives/mc-input';
import {McProduct} from './services/mcproduct';

interface ListImages {
  src: string;
}
interface ListItemData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, FormsModule, ModalComponent, McInput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title: string = 'Мягкие французские пироженки Macaroons';
  protected titleDescription: string = 'Побалуйте себя и своих близких самыми вкусными и ароматными домашними пироженками Macaroon!';
  protected listItems: ListItemData[] = [
    {title: 'Лучшие продукты', description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'},
    {title: 'Много вкусов', description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'},
    {title: 'Бисквитное тесто', description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'},
    {title: 'Честный продукт', description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'}
  ];
  protected listImages: ListImages[] = [
    {src: './assets/images/macaroons.png'},
    {src: './assets/images/macaroon.png'},
    {src: '/assets/images/macarons-order.png'},
    {src: '/assets/images/up-chevron-svgrepo-com.svg'},
  ]
  protected buttonSelectLabel: string = 'Выбрать макарун';
  protected aboutusTitle: string = 'Мы печём для вас вкуснейшие макаруны уже более 10 лет';
  protected aboutusDescription: string = 'Все пироженки мы готовим только из натуральных и качественных продуктов, без консервантов, ароматизаторов, красителей. Используем в приготовлении сливочное масло 82,5%, без дрожжей, маргарина,разрыхлителей и улучшителей муки.';

  protected macaroons: ProductData[];
  public secProductsAboutId: string = 'aboutus';
  protected secProductsId: string = 'mcproducts';
  protected secOrderId: string = 'order';
  protected secProductsTitle: string = 'Выберите свой макарун';
  protected secOrderTitle: string = 'Закажите макарун!';
  protected secOrderSubtitle: string = 'Выберите понравившийся макарун, заполните форму и ожидайте звонка нашего пекаря!';
  protected secOrderLabelSelect: string = 'Ваш выбор';
  protected secOrderLabelInfo: string = 'Заполните данные для заказа';
  protected secButtonOrderLabel: string = 'Оформить заказ';
  protected warningProduct: string = 'Выберите продукт';
  protected warningUserName: string = 'Заполните имя';
  protected warningUserPhone: string = 'Введите нмер телефона';
  protected phoneRegExp: RegExp = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  public userData: User = {
    productName: '',
    userName: '',
    userPhone: ''
  }

  protected isUserNameValid = signal(true);
  protected isUserPhoneValid = signal(true);
  protected isProductNameValid = signal(true);

  private modalService = inject(NgbModal);
  private mcService = inject(McProduct);

  constructor() {

    this.macaroons = this.mcService.requestMcProducts();
  }

  public onProductSelected(data: ProductData, target: HTMLElement): void {
    console.log(data);
    this.userData.productName = data.name;
    this.isProductNameValid.set(false);
    this.smoothScroll(target);

  }
  public onFormSubmit(event: Event): void {
    event.preventDefault();

    if (this.isFormValid()) {



      const modalRef = this.modalService.open(ModalComponent, { backdrop: 'static', centered: true });
      modalRef.componentInstance.title = this.userData.productName;
      modalRef.componentInstance.text = 'Ваш заказ принят. Ожидайте звонка от курьера';
    }


  }

  public onChoiceInput(value: string): void {
    this.userData.productName = value;

    let result: boolean = this.isValidProductName(value);

    this.isProductNameValid.set(!result);

  }

  public onNameInput(value: string): void {
    this.userData.userName = value;

    let result: boolean = value.length <= 2;

    this.isUserNameValid.set(result);
  }
  public onPhoneInput(value: string): void {
    this.userData.userPhone = value;
    let result: boolean = this.phoneRegExp.test(value);
    this.isUserPhoneValid.set(!result);
  }

  public smoothScroll(target: HTMLElement): void {

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  private isValidProductName(name: string): boolean {

    let result: boolean = false;

    for (let i = 1; i < this.macaroons.length; i++) {

      let data:ProductData = this.macaroons[i];
      if (data.name === name) {
        result = true;
        break;
      }
    }
    return result;
  }

  private isFormValid(): boolean {
    return !this.isProductNameValid() && !this.isUserNameValid() && !this.isUserPhoneValid();
  }
}
