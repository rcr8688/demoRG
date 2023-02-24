import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCheckOptions]',
  host: {
    '(click)': 'applyColor()',
  },
})
export class CheckOptionsDirective {
  @Input() numbi: any = 0;
  el: ElementRef;
  constructor(public ele: ElementRef) {
    console.log(this.numbi);
    this.el = ele;
  }
  applyColor() {
    console.log(this.numbi);
    this.numbi++;
    if (this.numbi % 2 !== 0) {
      console.log( this.el.nativeElement.value,"native")
      this.el.nativeElement.style.color = 'red';
    } else {
      this.el.nativeElement.style.color = 'green';
    }
  }
}
