import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: '[exercise-four]',
  templateUrl: './exercise.four.html'
})
export class ExerciseFour {
  members: any = [
    {
      firstName: 'john',
      dob: '10/10/1980'
    },
    {
      firstName: 'john',
      dob: '5/5/1950'
    }
  ];

  htmlContent =  '<p><a onclick="alert(\'hello\')" href="javascript:void(0)">click me </a> to see alert !!!</p>';

  // this flag is passed to ng-hide directive to hide
  sampleflag = true;
  constructor() {
  }
}
