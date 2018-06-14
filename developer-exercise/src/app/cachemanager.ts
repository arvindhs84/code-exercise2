import { Injectable } from '@angular/core';

//Used for caching the objects

@Injectable()
export class CacheManager {
   _cache: any = {};
  
  constructor() {
    
  }
  
  put(key: string, value: any): any {
    if (!value) {
      return null;
    }
     this._cache[key] = value;
  }
  
  get(key: string): any {
    return this._cache[key];
  }
}
