import {Component} from "angular2/core";
import {FormBuilder, FORM_DIRECTIVES} from "angular2/common";
import {CapitalizePipe} from "../../utilities/pipes/capitalize.pipe";

@Component({
    selector: "model-browser",
    directives: [FORM_DIRECTIVES],
    templateUrl: "./app/components/model-creator/model-browser.html",
    providers: [FormBuilder],
    pipes: [CapitalizePipe]
})

export class ModelBrowser {

}
