// Description: Provides API service layer for the Model Exporter feature

import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
// Import any local models
import {Observable} from "rxjs/Observable";


@Injectable()
export class ModelExporterService {
    constructor (private http: Http) {}

    private handleError (error: Response) {
        // TODO: Log error somewhere more permanent
        // TODO: Differentiate between different errors
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}
