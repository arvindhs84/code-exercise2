import { Component, OnInit } from '@angular/core';
import { RadiogroupComponent } from './radiogroup/radiogroup.component';

@Component({
  selector: '[exercise-six]',
  templateUrl:'exercise.six.html'
})

export class ExerciseSix {
  states: any = [
    {
      state: 'va',
      isChecked: false
    },
    {
      state: 'ca',
      isChecked: false
    },
    {
      state: 'ky',
      isChecked: false
    }
];
selectedState = 'ky';
}
