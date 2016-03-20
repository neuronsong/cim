import {Component, OnInit} from "angular2/core";
import {RouteConfig, Location, ROUTER_DIRECTIVES} from "angular2/router";
import {StateService} from "../../utilities/state.service";

@Component({
    selector: "sidenav",
    templateUrl: "./app/components/sidenav/sidenav.component.html",
    styleUrls:  ["./app/components/sidenav/sidenav.component.css", "./app/utilities/utility.css"],
    directives: [ROUTER_DIRECTIVES],
    providers: [StateService]
})
export class SidenavComponent implements OnInit {

    state: Object;
    // pattern = null;
    // details = null;
    // model = null;


    constructor(private _location: Location, private _stateService: StateService) { }

    isPageSelected(path) {
        return this._location.path().indexOf(path) !== -1;
    }

    getState() {
        this._stateService.getState().then(state => this.state = state);
        // this.pattern = this.state.pattern;
        // this.details = this.state.details;
        // this.model = this.state.model;
    }

    ngOnInit() {
        this.getState();
    }

}
