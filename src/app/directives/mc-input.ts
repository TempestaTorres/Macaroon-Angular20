import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[McInput]'
})
export class McInput implements OnInit {

  @Input()
  McBorderColor: string = '#821328';
  @Input()
  McBorderColorFocus: string = '#eba8b1';

  constructor(private input: ElementRef) {
  }

  public ngOnInit(): void {

    this.input.nativeElement.style.borderRadius = '30px';
    this.input.nativeElement.style.background = 'transparent';
    this.input.nativeElement.style.border = "1px solid " + this.McBorderColor;
    this.input.nativeElement.style.padding = '20px 23px';
    this.input.nativeElement.placeholder += "*";
  }

  @HostListener('focus')
  onFocus(): void {
    this.setBorderColor(this.McBorderColorFocus);
    this.input.nativeElement.style.boxShadow = '0 0 0 0.25rem rgba(130, 19, 40, 0.25)';
    this.input.nativeElement.style.outline = 'none';
  }

  @HostListener('blur')
  onBlur(): void {
    this.setBorderColor(this.McBorderColor);
    this.input.nativeElement.style.boxShadow = 'none';
  }

  private setBorderColor(color: string): void {
    this.input.nativeElement.style.borderColor = color;
  }

}
