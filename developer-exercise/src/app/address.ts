import { Subscription } from 'rxJs';
import { AddressDataObject } from './AddressDataObject';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxJs';
import { Api, IApiResponse } from './api';
import { Component, OnInit, Input, EventEmitter, Output,ViewChild,OnDestroy } from '@angular/core';
import {CacheManager} from './CacheManager';
import {FormBuilder, FormGroup,NgForm} from "@angular/forms";

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'address',
    templateUrl: 'address.html',
    exportAs: 'childAddressFields'

})
export class Address implements OnDestroy {
    state = ['VA', 'CA',
  'KY'];
    street: string;
    zip: string;
    city: string ;
    public addressobj: AddressDataObject;
      apiresponseobj: IApiResponse = {
          state: '',
          city: ''} ;
      @Input() selectedState: string ;
      @Output() notify: EventEmitter<string> = new EventEmitter<string>();
      @ViewChild('addressForm') public form: NgForm;
      cityStateSubs :Subscription;
      errorMessage: string;
      resetflag = true;
      subscribed = false;
        
      constructor(private _api: Api, private _cache: CacheManager) { }
      
      ngOnInit() {
        this.apiresponseobj.state = this.selectedState;
      }
      ngOnDestroy() {
        if(this.subscribed)        
        this.cityStateSubs.unsubscribe();
      }
    
      onDropdownChange(state: string) {
        this.notify.emit(state);
      }

      public GetAddress(): string {
        if (!this.resetflag) {
        this.addressobj =  {
          street : this.street,
          zip: this.zip,
          state: this.apiresponseobj.state,
          city: this.apiresponseobj.city
        };
        // tslint:disable-next-line:no-unused-expression
        return this.addressobj.street + ',' +  this.addressobj.city + ', ' + this.addressobj.state
         + ', ' + this.addressobj.zip;
        } else { return ''; }
      }
      public ResetForm() {
        this.form.reset();
        this.street = '';
        this.zip = '';
        this.resetflag = true;
      }
      PopulateCityState (zip: string) {
        
       this.cityStateSubs= this._api.getCityState(zip).subscribe(apires => {
          this.GetCityState(apires.results[0].address_components);
          this.subscribed = true;
        this._cache.put(zip, this.apiresponseobj);
        },
        error => this.errorMessage = <any>error);
      
      this.resetflag = false;
      }
      GetCityState( a: any) {
        let city = null, state = null;
        for (let i = 0; i < a.length; ++i) {
           const t = a[i].types;
           if (this.compIsType(t, 'administrative_area_level_1')) {
              state = a[i].short_name;
           } else if (this.compIsType(t, 'locality')) {
              city = a[i].long_name;
                  } // store the city

           // we can break early if we find both
           if (state != null && city != null) { break; }
        }


        this.apiresponseobj = <IApiResponse>{ 'state' : state,
          'city' : city };
          this.notify.emit(state);
    }
     compIsType(t, s) {
        for (let z = 0; z < t.length; ++z) {
           if (t[z] === s) {
              return true;
           }
        }

        return false;
     }

}
