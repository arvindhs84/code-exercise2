import { Observable, Subscription } from 'rxJs';
import { Api, IApiResponse } from './api';
import { Component, OnInit } from '@angular/core';
import {CacheManager} from './CacheManager';

@Component({
  selector: '[exercise-one]',
  templateUrl:'exercise.one.html'
})
export class ExerciseOne implements OnInit {
  data: Subscription;
  apiresponseobj: IApiResponse = {city: '', state: ''};
  errorMessage: string;

  constructor(private _api: Api, private _cache: CacheManager) { }

  ngOnInit() {
    //Retrieving from the api if the cache is not present
    let cachedResp = this._cache.get('exerciseOne');
    if (cachedResp) {
      this.apiresponseobj = cachedResp;
    } else {
    this.data =this._api.getCityState('23058').subscribe(apires => {
      this.apiresponseobj = <IApiResponse>{ 'state' : apires.results[0].address_components[4].short_name,
      'city' : apires.results[0].address_components[1].short_name };
    this._cache.put('testCache', this.apiresponseobj);
    },
    error => this.errorMessage = <any>error);
  }
   }
  
   ngOnDestroy() {
    this.data.unsubscribe();
  }
  }
