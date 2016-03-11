// Description: Provides API service layer for the Pattern Selector feature

import {Injectable} from "angular2/core";
//import {Http, Response} from "angular2/http";
//import {Observable} from "rxjs/Observable";

export class Pattern {
    constructor(public id: number, public name: string) { }
}

@Injectable()
export class PatternSelectorService {
    private _serviceUrl = "";

    // TODO: perform pattern CRUD to backend server @_serviceUrl
    private _PATTERNS = [
        new Pattern(1, "observation"),
        new Pattern(2, "procedure"),
        new Pattern(3, "assertion")
    ];
    private _patternPromise = Promise.resolve(this._PATTERNS);

    constructor () {
        this._serviceUrl = "http://www.google.com";
    }

    getPatterns() { return this._patternPromise; }

    getPattern(id: number | string) {
        return this._patternPromise.then(patterns => patterns.filter(p => p.id === +id)[0]);
    }

    // Expects stringified JSON object containing the selected pattern
    storePattern(id: number | string) {
        // TODO: Link to services
        // return this.http.post(this._serviceUrl, pattern)
        //     .map(res => <Pattern[]> res.json().data)
        //     .catch(this.handleError);
        localStorage.setItem("cimiPattern", this._PATTERNS[id]);
    }
}
