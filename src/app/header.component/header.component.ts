import {Component, inject} from '@angular/core';
import {UpperCasePipe} from '@angular/common';
import {OffcanvasComponent} from '../offcanvas.component/offcanvas.component';
import {NgbOffcanvas} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  imports: [
    UpperCasePipe,
    OffcanvasComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  protected readonly brandLogo: string = 'macaroons';
  protected readonly phoneNumber: string = '+375 (29) 368-98-68';

  private offcanvasService = inject(NgbOffcanvas);

  public open() {
    this.offcanvasService.open(OffcanvasComponent);
  }

}
