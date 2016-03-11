import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
//import {FormBuilder, FORM_DIRECTIVES} from "angular2/common";
// TODO: Get selected state
// TODO: Import stored data
@Component({
    selector: "sidenav",
    directives: [ROUTER_DIRECTIVES],
    templateUrl: "./app/components/sidenav/sidenav.component.html",
    styleUrls:  ["./app/components/sidenav/sidenav.component.css", "./app/utilities/utility.css"],
    //providers: [FormBuilder]
})

export class Sidenav {

}
