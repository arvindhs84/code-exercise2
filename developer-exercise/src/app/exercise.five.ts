import { Subscription } from 'rxJs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, pipe } from 'rxJs';
import { Http, Response, Headers } from '@angular/http';
import { map, filter, scan } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
  import 'rxjs/add/operator/map';
  import 'rxjs/add/observable/throw';
  import 'rxjs/add/operator/catch';
  import 'rxjs/add/operator/do';
  import 'rxjs/add/operator/publishReplay';
  import 'rxjs/add/operator/take';


@Component({
  selector: '[exercise-five]',
  templateUrl:'exercise.five.html' 
})
export class ExerciseFive implements OnInit,OnDestroy {
  productArray: Array<string> = ['FUTURE', 'TERMINATED',  'ACTIVE'];
  
  // changing the get property to normal field to ensure it isnt called infinite times.
  loggedInMember$ =  this._http.get('assets/member.json?' + (new Date()).getTime())
   .map((res: Response) => {return res.json()})
   .take(1);

   ngOnInit(): void {
    this.productArray = this.productArray.map(function(el) {
       return  el + '_PRODCT';
    });
    this.productArray = this.productArray.sort();
  }
  ngOnDestroy(): void {    
  }
  
constructor(private _http: Http) {
   }

  //Handling error in case of failure for api
  private handleError (error: Response | any) {
    
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
