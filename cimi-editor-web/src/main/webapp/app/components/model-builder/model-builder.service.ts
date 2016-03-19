// Description: Provides API service layer for the Model Editor feature

import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
// Import any local models
import {Observable} from "rxjs/Observable";

@Injectable()
export class ModelBuilderService {
    constructor (private http: Http) {}

    // Expects stringified JSON object containing the new model
    storeModel (pattern: string) {
        // TODO: Link to services
        // return this.http.post(this._serviceUrl, pattern)
        //     .map(res => <Pattern[]> res.json().data)
        //     .catch(this.handleError);
        localStorage.setItem("cimiModelFinal", pattern);
    }

    private handleError (error: Response) {
        // TODO: Log error somewhere more permanent
        // TODO: Differentiate between different errors
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}
