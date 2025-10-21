import {Component, inject, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
})
export class ModalComponent {

  public title: string = 'Modal';
  public text: string = '';

  protected closeLabel: string = 'Close';
  activeModal = inject(NgbActiveModal); //needs provider NgbActiveModal in appConfig
}
