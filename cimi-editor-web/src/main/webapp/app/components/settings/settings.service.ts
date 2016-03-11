// Description: Provides API service layer for the Settings feature

import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SettingsService {
    private _serviceUrl = "";
    private _settings = "";

    constructor (private _http: Http) {
        this._serviceUrl = "http://www.google.com";
    };

    getSettings () {
        return [];
    }

    storeSettings (pattern: string) {
        localStorage.setItem("cimiEditorSettings", this._settings);
    }

    private handleError (error: Response) {
        // TODO: Log error somewhere more permanent
        // TODO: Differentiate between different errors
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}
