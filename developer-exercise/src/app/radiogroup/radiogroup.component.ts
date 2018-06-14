import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';
import { Component, Input, ElementRef, Renderer2, Output, EventEmitter, forwardRef } from '@angular/core';


@Component({
  selector: 'radio-group',
  template: `<fieldset>
                <legend></legend>
                  <div>
                  <ng-container *ngFor="let o of items">
                      <input  type="radio" [name]="o.state" [id]="'rgd_'+o.state" [value]="o.state" [checked]="o.isChecked" (click)="onItemClick(o)"/>
                      <label [id]="'lbl_'+o.state"  [innerHTML]="o.state"></label>                    
                  </ng-container>
                  </div>
             </fieldset>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadiogroupComponent),
      multi: true
    }
  ]
})
export class RadiogroupComponent implements  ControlValueAccessor {
  @Input() items = [];
  optionalSelected = false;
  private onChangeCallback = (_: any) => {

  }

  private onTouchedCallback = () => {

  }

  constructor(private _renderer: Renderer2) { }


  onItemClick(item: any) {
    this.setRadioValue(item.state);
    this.onChangeCallback(item.state);
  }


  writeValue(v: any) {
    this.setRadioValue(v);    
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {

    this.onTouchedCallback = fn;
  }
  //Setting radio button value
  private setRadioValue(value: any = '') {
    value = ((value === null || typeof value === 'undefined') ? '' : value);
     this.items.forEach((item: any) => {
       if (item.state.toString() === (value).toString()) {
         item.isChecked = true;
       } else {
        item.isChecked = false;
       }
     });
  }
}
