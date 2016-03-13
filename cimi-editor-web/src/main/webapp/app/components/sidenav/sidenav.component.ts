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
    
    state = null;
    
    constructor(private _location: Location, private _stateService: StateService) { }
    
    isPageDeselected(path) {
        return this._location.path().indexOf(path) === -1;
    }
    
    getState() {
        this._stateService.getState().then(state => this.state = state);
        console.log(this.state);
    }
    
    ngOnInit() {
        this.getState();
    }

}
