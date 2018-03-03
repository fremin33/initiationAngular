import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
    selector: '[appShowCard]'
})
export class ShowCardDirective {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.setBorder('#F5F5F5');
    }

    setBorder(color: string): void {
        let style = 'solid 4px ' + color;
        this.renderer.setStyle(this.el.nativeElement, 'border', style);
    }
    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder('#ffff00'); //couleur jaune
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder('#f5f5f5'); //couleur gris
    }

}
