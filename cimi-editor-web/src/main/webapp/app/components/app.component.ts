import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {PatternSelector} from "./pattern-selector/pattern-selector.component";
@Component({
    selector: "cimi-editor",
    template: `
    <h1>CIMI Editor Angularized!</h1>
    <a [routerLink]="['PatternSelector']">Pattern Selector</a>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: "/", redirectTo: ["PatternSelector"]},
    {path: "/**", redirectTo: ["PatternSelector"]},
    {path: "/pattern-selector", name: "PatternSelector", component: PatternSelector, useAsDefault: true}
    // TODO: Include other routes
])
export class AppComponent { }
