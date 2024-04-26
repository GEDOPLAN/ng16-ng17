import {AfterViewChecked, Directive, ElementRef, NgZone} from '@angular/core';
import {MatTooltip} from '@angular/material/tooltip';

@Directive({
  selector: '[appShowToolTipIfTruncated]',
  standalone: true,
  host: {
    '[style.white-space]': '"nowrap"',
    '[style.overflow]': '"hidden"',
    '[style.text-overflow]': '"ellipsis"'
  },
  hostDirectives: [MatTooltip]
})
export class ShowToolTipIfTruncatedDirective implements AfterViewChecked {

  constructor(private el: ElementRef, private matTooltip: MatTooltip, private ngZone: NgZone) {
  }

  ngAfterViewChecked() {
   setTimeout(() => {
      const textContent = this.el.nativeElement.textContent;
      this.matTooltip.message = textContent;
      this.matTooltip.disabled = this.calculateTextContentWith() < this.el.nativeElement.clientWidth;
    });
  }

  private calculateTextContentWith(): number {
    const elementStyle = getComputedStyle(this.el.nativeElement);
    const canvas = document.createElement('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    context!.font = elementStyle.getPropertyValue('font');
    return context!.measureText(this.el.nativeElement.innerHTML).width;
  }

}
