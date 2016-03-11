import {Component} from "angular2/core";
import {FormBuilder, FORM_DIRECTIVES} from "angular2/common";
import {Router} from "angular2/router";
import {CapitalizePipe} from "../pipes/capitalize.pipe";

@Component({
    selector: "model-creator",
    directives: [FORM_DIRECTIVES],
    templateUrl: "./app/components/model-creator/model-creator.html",
    styleUrls:  ["./app/utilities/forms.css", "./app/utilities/utility.css"],
    providers: [FormBuilder],
    pipes: [CapitalizePipe]
})

export class ModelCreator {

    constructor(private _router: Router) {}

    payload = null;
    modelSimple = {
        name: "",
        binding: "",
        description: ""
    };
    submitted = false;

    onSubmit() {
        this.submitted = true;
        // TODO: Store decision somewhere
        this.payload = JSON.stringify(this.modelSimple);
        alert(this.payload);
    }

    goToPatternSelector() {
        this._router.navigate(["PatternSelector"]);
    }
}
