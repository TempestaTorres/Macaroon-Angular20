import { Component } from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    UpperCasePipe
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  protected readonly brandLogo: string = 'macaroons';
  protected readonly phoneNumber: string = '+375 (29) 368-98-68';
  protected readonly instaLink: string = 'https://www.instagram.com/';
}
