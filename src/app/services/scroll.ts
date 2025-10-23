import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  public smoothScrollIntoView(target: HTMLElement): void {

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
