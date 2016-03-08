import {Component} from "angular2/core";
import {FormBuilder, FORM_DIRECTIVES} from "angular2/common";
import {CapitalizePipe} from "../pipes/capitalize.pipe";

@Component({
    selector: "model-creator",
    directives: [FORM_DIRECTIVES],
    templateUrl: "./app/components/model-creator/model-creator.html",
    providers: [FormBuilder],
    pipes: [CapitalizePipe]
})

export class ModelCreator {

    payload = null;
    model = {
        pattern: ""
    };
    submitted = false;

    onSubmit() {
        this.submitted = true;
        // TODO: Store decision somewhere
        this.payload = JSON.stringify(this.model.pattern);
        alert(this.payload);
    }
}
