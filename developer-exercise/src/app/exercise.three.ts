import { SsnformatterDirective } from './ssnformatter.directive';
import { AddressDataObject } from './AddressDataObject';
import { Component, EventEmitter, Output,ViewChild } from '@angular/core';
import {Address} from './address';
import {ComponentCanDeactivate} from './component-can-deactivate';
import {NgForm} from '@angular/forms';


@Component({
  selector: '[exercise-three]',
  templateUrl: 'exercise.three.html'
})
export class ExerciseThree implements ComponentCanDeactivate {
  selectedAddress: string;
  selectedState = 'VA';
  ssn = '';
  submitted = false;
  address: Address;
  isDirty: boolean = false;
  @ViewChild('userInputForm') public userFrm: NgForm;
  @ViewChild('addressFields') public userAddressFrm: NgForm;
  constructor() { }

  onNotify(message: string): void {
    this.selectedState = message;
  }

  ResetControls() {
    this.selectedAddress='';
    this.submitted = false;
  }

  //Guard deactivate method to check if the form is dirty
   canDeactivate(): boolean {
     if(this.userFrm.form.dirty || this.userAddressFrm.form.dirty)
     {this.isDirty = true;}
     else {this.isDirty = false;}
    return !this.isDirty;
  }
    OnSubmit() { this.submitted = true;
  }


}
