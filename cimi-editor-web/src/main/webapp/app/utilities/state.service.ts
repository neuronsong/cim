// Description: Provides local browser state management for simple models

import {Injectable} from "angular2/core";
//import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {STATE} from "./mock-state";

@Injectable()
export class StateService {
    //constructor (private http: Http) { }

    // Updates the browser's app state
    // stateType: String to represent each of the locally stored collections the app depends upon
    // stateValue: Object representation of collection for each stateType (e.g., pattern, for pattern selection)
    updateState (stateType: String, stateValue: Object) {

        let cimiStorage = JSON.parse(localStorage.getItem("cimi"));

        if (stateType === "pattern") {
            cimiStorage.pattern = stateValue;
        } else if (stateType === "details") {
            cimiStorage.details = stateValue;
        } else if (stateType === "model") {
            cimiStorage.model = stateValue;
        } else if (stateType === "settings") {
            cimiStorage.settings = stateValue;
        }

        localStorage.setItem("cimi", JSON.stringify(cimiStorage));
        return;
    }

    // Gets the browser's app state
    getState () {
        // TODO: Implement for real

        // This is a sample, simplified JSON representation of the various model states
        return Promise.resolve(STATE);

        // return JSON.parse(localStorage.getItem('cimi'));
    }
}
