import { Directive, HostBinding, Input, Component, HostListener, ElementRef } from '@angular/core';

@Component({
    selector: '[click-global]',
    template: `
        last clicked date time: {{lastDate}}
        <br/>

        <button *ngFor="let btn of [1, 2, 3, 4]" class="update-time">button {{btn}} works</button>
        <br/>
        <button *ngFor="let btn of [5, 6]">button {{btn}}</button>
        <br/>
        <button>single button</button>
        <br/>
        <div style="width: 500px; display: block;height:500px;" tabindex="0">
        <div>
        <button class="update-time">button works!!!</button>
        </div>
        </div>
    `
})
export class ClickGlobal {
    lastDate: string;

    constructor(private _eleRef: ElementRef) { }

    @HostListener('click', ['$event.target'])
    click() {
        event.srcElement.className === 'update-time' ?  this.lastDate =  (new Date()).toLocaleString() : this.lastDate;
    }
}
