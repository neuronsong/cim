import {Component} from "angular2/core";
import {FormBuilder, FORM_DIRECTIVES} from "angular2/common";
import {CapitalizePipe} from "../../utilities/pipes/capitalize.pipe";

@Component({
    selector: "pattern-selector",
    directives: [FORM_DIRECTIVES],
    providers: [FormBuilder],
    pipes: [CapitalizePipe],
    templateUrl: "./app/components/pattern-selector/pattern-selector.component.html",
    styleUrls:  ["./app/utilities/forms.css", "./app/utilities/utility.css"],
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
