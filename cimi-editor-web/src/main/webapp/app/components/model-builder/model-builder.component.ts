import {Component, OnInit} from "angular2/core";
import {FormBuilder, FORM_DIRECTIVES} from "angular2/common";
import {CapitalizePipe} from "../../utilities/pipes/capitalize.pipe";
import {StateService} from "../../utilities/state.service";
import {State} from "../../utilities/state";

@Component({
    selector: "model-builder",
    directives: [FORM_DIRECTIVES],
    templateUrl: "./app/components/model-builder/model-builder.html",
    providers: [FormBuilder, StateService],
    pipes: [CapitalizePipe]
})

export class ModelBuilder implements OnInit {

    payload: Object;
    state: State;
    submitted = false;

    // TODO: Insert mock data
    elements = [];

    constructor(private _stateService: StateService) { }

    loadModel() {
        this._stateService.getState().then(state => this.state = state);
        // let keys = Object.keys(this.state.model);
            // for (let key in keys) {
            //     this.elements.push(this.state.model[key]);
            // }
            // alert(this.elements);
    }

    ngOnInit() {
        this.loadModel();
    }

    onSubmit() {
        this.submitted = true;
        // TODO: Store decision somewhere
        this.payload = JSON.stringify(this.state);
        alert(this.payload);
    }
}
