import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appThreeDotsForLongText]'
})
export class ThreeDotsForLongTextDirective {
  @Input('appThreeDotsForLongText') maxLinesNumber!: number;

  constructor(private readonly _el: ElementRef) { }

  ngOnInit() {
    this._el.nativeElement.style.overflow = 'hidden';
    this._el.nativeElement.style.display = '-webkit-box';
    this._el.nativeElement.style.webkitLineClamp = `${this.maxLinesNumber}`;
    this._el.nativeElement.style.webkitBoxOrient = 'vertical';
  }
}
