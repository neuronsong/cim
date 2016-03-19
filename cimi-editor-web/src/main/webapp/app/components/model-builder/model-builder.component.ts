import {Component} from "angular2/core";
import {FormBuilder, FORM_DIRECTIVES} from "angular2/common";
import {CapitalizePipe} from "../../utilities/pipes/capitalize.pipe";

@Component({
    selector: "model-builder",
    directives: [FORM_DIRECTIVES],
    templateUrl: "./app/components/model-builder/model-builder.html",
    providers: [FormBuilder],
    pipes: [CapitalizePipe]
})

export class ModelBuilder {

    payload = null;
    model = {
        modelFinal: ""
    };
    submitted = false;

    onSubmit() {
        this.submitted = true;
        // TODO: Store decision somewhere
        this.payload = JSON.stringify(this.model.modelFinal);
        alert(this.payload);
    }
}
