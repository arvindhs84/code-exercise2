import { Directive, Input, Output, EventEmitter, OnInit, ElementRef, HostListener, forwardRef, SimpleChanges } from '@angular/core';
import { ProviderAst } from '@angular/compiler';
import { NG_VALIDATORS, Validator, NgControl, AbstractControl, FormControl  } from '@angular/forms';

@Directive({
  selector: '[appSsnformatter]',
    host: {
      '[value]': 'ssnFormat',      
  },
providers: [
  { provide: NG_VALIDATORS, useExisting: forwardRef(() => SsnformatterDirective), multi: true }
]
})
export class SsnformatterDirective implements Validator {
  @Input() appSsnformatter: string;
  @Input() control: NgControl;
  @Output() ssnformatted: EventEmitter<string> = new EventEmitter<string>();
  constructor(public el: ElementRef) {}

  //Validating the input ssn format
  validate(c: FormControl): { [key: string]: any; } {

    if (!this.validator()){
      return {
        validateSSN: false}
    }
    return null;
  }


  @HostListener('blur') onblur() {
    this.formatter();
}

@HostListener('keyup') onkeyup() {
  this.formatter();
}


formatter() {
   this.el.nativeElement.value = this.formatSSN(this.el.nativeElement.value);
}

validator(): boolean {
  const value = this.formatSSN(this.el.nativeElement.value);
  const regexp = new RegExp('\\d{3}[\\-]\\d{2}[\\-]\\d{4}');
  const test = regexp.test(value);
  return test;

}

//method to format input ssn
formatSSN(value): string {
  let val = value.replace(/\D/g, '');
        let newVal = '';
        let counter = 3;
        if (val.length > 9) {
          val = val.substring(0, 9);
        }
        while (val.length > counter) {
          newVal += val.substr(0, counter) + '-';
          val = val.substr(counter);
          if (counter === 2) { break;
          }
          counter = 2;
        }
        newVal += val;
        value = newVal;
        return value;

}


}
