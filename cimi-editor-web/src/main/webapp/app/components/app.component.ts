import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {PatternSelector} from "./pattern-selector/pattern-selector.component";
import {ModelCreator} from "./model-creator/model-creator.component";
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
    {path: "/pattern-selector", name: "PatternSelector", component: PatternSelector, useAsDefault: true},
    {path: "/model-creator", name: "ModelCreator", component: ModelCreator},
    // TODO: Include other routes
])
export class AppComponent { }
