// Description: Provides API service layer for the Pattern Selector feature

import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
// Import any local models
// import {Pattern} from '../../model/pattern';
import {Observable} from 'rxjs/Observable';
// TODO: Create service core for constants
// import {ServiceCore} from '../../shared/ServiceCore'; 


@Injectable()
export class PatternSelectorService {
    constructor (private http: Http) {}

    // TODO: Get from ServiceCore
    private _serviceUrl = 'http://www.google.com';  // URL to web api

    getPatterns () {
        
        return [];
        
        // TODO: Enable once services are up
        // return this.http.get(this._serviceUrl)
        //     .map(res => <Pattern[]> res.json().data)
        //     .catch(this.handleError);
    }
  
    // Expects stringified JSON object containing the selected pattern
    storeSelectedPattern (pattern: string) {
        // TODO: Link to 
        // return this.http.post(this._serviceUrl, pattern)
        //     .map(res => <Pattern[]> res.json().data)
        //     .catch(this.handleError);
        localStorage.setItem('cimiPattern', pattern);
    }
  
    private handleError (error: Response) {
    // TODO: Log error somewhere more permanent
    // TODO: Differentiate between different errors
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
    }
}
