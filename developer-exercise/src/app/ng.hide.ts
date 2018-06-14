import { Directive, HostBinding, Input, ElementRef, OnInit, Renderer, Renderer2 } from '@angular/core';

//Directive to hide based on a flag
@Directive({    
    selector: '[ng-hide]'

})
export class NgHide implements OnInit {

    @Input('ng-hide') displayprop: boolean;

    ngOnInit(): void {
        if (this.displayprop){
        this.renderer.addClass(this.el.nativeElement, 'hide');
        }
    }

    constructor(public el: ElementRef,
        private renderer: Renderer2) {
     }
}
