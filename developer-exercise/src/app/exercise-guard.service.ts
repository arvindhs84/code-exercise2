import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import {ComponentCanDeactivate} from './component-can-deactivate';
import { Observable } from 'rxJs';

//Guard service to alert user when navigating from a dirty form
@Injectable()
export class ExerciseGuardService implements CanDeactivate<ComponentCanDeactivate> {

  constructor() { }
  
   canDeactivate(component: ComponentCanDeactivate): boolean | Observable<boolean> {
    if(component.canDeactivate()) {
      return true;
    } else {
      if(confirm('You have unsaved changes. Press Cancel to go back , or OK to lose these changes.'))
      {
        return true;
      } else {
        return false;
      }
    }
  }

}
