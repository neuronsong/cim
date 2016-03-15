// Description: Provides API service layer for the Settings feature

import {Injectable} from "angular2/core";
//import {Http, Response} from "angular2/http";
//import {Observable} from "rxjs/Observable";

export class Setting {
    constructor(public id: number, public name: string) { }
}

@Injectable()
export class SettingsService {
    private _serviceUrl = "";
    private _SETTINGS = [
        new Setting(1, "showAllElements"),
    ];
    private _settingsPromise = Promise.resolve(this._SETTINGS);

    constructor () {
        this._serviceUrl = "http://www.google.com";
    };

    getSettings() { return this._settingsPromise; }

    getSetting(id: number | string) {
        return this._settingsPromise.then(settings => settings.filter(s => s.id === +id)[0]);
    }

    storeSettings () {
        localStorage.setItem("cimiEditorSettings", JSON.stringify(this._SETTINGS));
    }
}
