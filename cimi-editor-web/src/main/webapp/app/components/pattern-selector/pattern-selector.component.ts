import {Component, OnInit} from "angular2/core";
import {Pattern, PatternSelectorService}   from "./pattern-selector.service";
import {Router, RouteParams} from "angular2/router";

@Component({
    selector: "pattern-selector",
    templateUrl: "./app/components/pattern-selector/pattern-selector.component.html",
    providers: [PatternSelectorService]
})

export class PatternSelector implements OnInit {
    patterns: Pattern[];

    private _selectedPattern: number;

    constructor(
        private _service: PatternSelectorService,
        private _router: Router,
        routeParams: RouteParams) {
            this._selectedPattern = +routeParams.get("id");
    }

    isSelected(pattern: Pattern) { return pattern.id === this._selectedPattern; }

    onSelect(pattern: Pattern) {
        this._router.navigate( ["ModelCreator", { id: pattern.id }] );
    }

    ngOnInit() {
        this._service.getPatterns().then(patterns => this.patterns = patterns);
    }
}
