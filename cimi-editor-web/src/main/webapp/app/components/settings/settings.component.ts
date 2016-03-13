// Description: Editor settings

import {Component} from "angular2/core";
import {FormBuilder, FORM_DIRECTIVES} from "angular2/common";

@Component({
    selector: "settings",
    directives: [FORM_DIRECTIVES],
    templateUrl: "./app/components/settings/settings.html",
    providers: [FormBuilder]
})

export class Settings {
    constructor() { }

    private payload = null;

    private showAllElements = false;

    // load from backend
    private modelMetadata = {
    "observation":
        {
            "model-name":"observation",
            "model":"CIMI-CORE-ITEM_GROUP.observation_result.v1.0.0.json",
            "elements-to-hide":
                {
                    "Subject of information": true,
                    "Cluster": true,
                    "Element": true,
                    "item": true
                }
        }
    };

    private  submitted: boolean = false;

    public onSubmit() {
        this.submitted = true;
        // TODO: Store new settings - serialize and store on backend?
        this.payload = JSON.stringify(this.modelPatterns);
        alert(this.payload);
    }
}