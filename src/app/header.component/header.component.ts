import {Component, inject, Input} from '@angular/core';
import {UpperCasePipe} from '@angular/common';
import {OffcanvasComponent} from '../offcanvas.component/offcanvas.component';
import {NgbOffcanvas} from '@ng-bootstrap/ng-bootstrap';
import {NavLink} from '../interfaces/app.interfaces';
import {ScrollService} from '../services/scroll';
import {CartComponent} from '../cart.component/cart.component';

@Component({
  selector: 'app-header',
  imports: [
    UpperCasePipe,
    OffcanvasComponent,
    CartComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  protected readonly brandLogo: string = 'macaroons';
  protected readonly phoneNumber: string = '+375 (29) 368-98-68';

  @Input({
    required: true,
    alias: 'links'
  })
  headerNavLinks: NavLink[] = [];

  //Services
  private offcanvasService = inject(NgbOffcanvas);
  private scrollService = inject(ScrollService);

  public open() {
    this.offcanvasService.open(OffcanvasComponent);
  }
  public onLinkClick(e: Event, target: HTMLElement): void {
    e.preventDefault();

    this.scrollService.smoothScrollIntoView(target);
  }

}
