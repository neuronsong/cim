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
    //constructor() { };

    private payload = null;

    private editorSettings = {
        "showAllElements":false
    };

    private  submitted: boolean = false;

    public onSubmit() {
        this.submitted = true;
        // TODO: Store new settings - serialize and store on backend?
        this.payload = JSON.stringify(this.editorSettings);
        alert(this.payload);
    }
}
