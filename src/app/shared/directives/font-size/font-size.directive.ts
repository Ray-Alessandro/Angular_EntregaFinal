import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFontSize]',
  standalone: false
})
export class FontSizeDirective {

  @Input('appFontSize') fontSize?: string = '20px';
  @Input() color?: string;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.style.fontSize = this.fontSize;
    if (this.color) {
      this.element.nativeElement.style.color = this.color;
    }
  }
}
