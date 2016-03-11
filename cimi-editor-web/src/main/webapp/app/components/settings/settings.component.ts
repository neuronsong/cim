// Description: Editor settings

import {Component, OnInit} from "angular2/core";
import {FormBuilder, FORM_DIRECTIVES} from "angular2/common";
import {Setting, SettingsService}   from "./settings.service";

@Component({
    selector: "settings",
    directives: [FORM_DIRECTIVES],
    templateUrl: "./app/components/settings/settings.html",
    providers: [FormBuilder,SettingsService]
})

export class Settings implements OnInit {
    settings: Setting[];

    constructor(private _service: SettingsService) {}

    ngOnInit() {
        this._service.getSettings().then(settings => this.settings = settings);
    }
}
