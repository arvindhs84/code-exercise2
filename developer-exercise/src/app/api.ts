import { Injectable } from '@angular/core';
import { Observable, Subject, pipe } from 'rxJs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map, filter, scan } from 'rxjs/operators';
  import 'rxjs/add/operator/map';
  import 'rxjs/add/observable/throw';
  import 'rxjs/add/operator/catch';
  import 'rxjs/add/operator/do';
  import 'rxjs/add/operator/publishReplay';



@Injectable()
export class Api {

     private _googleAPI = 'https://maps.googleapis.com/maps/api/geocode/json?sensor=true&address=';

    constructor(private http: Http) { }

    // Getting the data from the google API 
    getCityState(zip: string): Observable<any> {

         let o = this.http.get(this._googleAPI + zip)
        // ...and calling .json() on the response to return data
         .map((res: Response) => res.json())
         .do(data => console.log('test: ' + JSON.stringify(data)))
         // ...errors if any
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
         return o;
        }
    }

export interface IApiResponse {
    city: string;
    state: string;
}
