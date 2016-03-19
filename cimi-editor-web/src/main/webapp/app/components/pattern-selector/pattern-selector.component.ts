import {Component, OnInit} from "angular2/core";
import {FormBuilder, FORM_DIRECTIVES} from "angular2/common";
import {CapitalizePipe} from "../../utilities/pipes/capitalize.pipe";
import {Pattern, PatternSelectorService} from "./pattern-selector.service";
import {Router, RouteParams} from "angular2/router";

@Component({
    selector: "pattern-selector",
    directives: [FORM_DIRECTIVES],
    providers: [FormBuilder, PatternSelectorService],
    pipes: [CapitalizePipe],
    templateUrl: "./app/components/pattern-selector/pattern-selector.component.html",
    styleUrls:  ["./app/utilities/forms.css", "./app/utilities/utility.css"]
})
export class PatternSelector implements OnInit {

    patterns: Pattern[];
    private _selectedPattern: number;
    submitted = false;

    constructor(
        private _service: PatternSelectorService,
        private _router: Router,
        routeParams: RouteParams) {
            this._selectedPattern = +routeParams.get("id");
    }

    isSelected(pattern: Pattern) { return pattern.id === this._selectedPattern; }

    onSelect(pattern: Pattern) {
        this._router.navigate( ["ModelDetailer", { id: pattern.id }] );
    }

    ngOnInit() {
        this._service.getPatterns().then(patterns => this.patterns = patterns);
    }
}
