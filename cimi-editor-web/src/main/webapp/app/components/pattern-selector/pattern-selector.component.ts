import {Component} from "angular2/core";
import {FormBuilder, FORM_DIRECTIVES} from "angular2/common";
import {CapitalizePipe} from "../pipes/capitalize.pipe";

@Component({
    selector: "pattern-selector",
    directives: [FORM_DIRECTIVES],
    templateUrl: "./app/components/pattern-selector/pattern-selector.component.html",
    providers: [FormBuilder],
    pipes: [CapitalizePipe]
})

export class PatternSelector {

    payload = null;
    model = {
        pattern: ""
    };

    // TODO: Load from service
    patterns = ["observation", "procedure", "assertion"];
    
    submitted = false;

    onSubmit() {
        this.submitted = true;
        // TODO: Store decision somewhere
        this.payload = JSON.stringify(this.model.pattern);
        alert(this.payload);
    }
}
