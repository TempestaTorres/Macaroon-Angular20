import {Component, inject} from '@angular/core';
import {UpperCasePipe} from "@angular/common";
import {NgbActiveOffcanvas,NgbOffcanvasConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offcanvas',
    imports: [
        UpperCasePipe
    ],
  standalone: true,
  templateUrl: './offcanvas.component.html',
  styleUrl: './offcanvas.css'
})
export class OffcanvasComponent {

  //Services
  offcanvas = inject(NgbActiveOffcanvas);

  protected readonly title: string = 'macaroon';

  constructor(
    config: NgbOffcanvasConfig,
  )
  {
    // customize default values of offcanvas used by this component tree
    config.position = 'end';
    config.keyboard = false;
  }

}
