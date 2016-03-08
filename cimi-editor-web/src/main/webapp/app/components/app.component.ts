import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {PatternSelector} from "./pattern-selector/pattern-selector.component";
import {ModelCreator} from "./model-creator/model-creator.component";
import {ModelEditor} from "./model-editor/model-editor.component";
import {ModelViewer} from "./model-viewer/model-viewer.component";
import {ModelBrowser} from "./model-browser/model-browser.component";
import {SettingsComponent} from "./settings/settings-component";

@Component({
    selector: "cimi-editor",
    template: `
    <div class="container">
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">CIMI Editor</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li><a class="active" [routerLink]="['PatternSelector']">Pattern Selector</a></li>
                    <li><a [routerLink]="['ModelCreator']">Model Creator</a></li>
                    <li><a [routerLink]="['ModelViewer']">Model Viewer</a></li>
                    <li><a [routerLink]="['ModelEditor']">Model Editor</a></li>
                    <li><a [routerLink]="['ModelBrowser']">Model Browser</a></li>
                    <li><a [routerLink]="['Settings']">Settings</a></li>
                </ul>
                </div><!--/.nav-collapse -->
            </div>
        </nav>
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: "/pattern-selector", name: "PatternSelector", component: PatternSelector, useAsDefault: true},
    {path: "/model-creator", name: "ModelCreator", component: ModelCreator},
    {path: "/model-editor", name: "ModelEditor", component: ModelEditor},
    {path: "/model-viewer", name: "ModelViewer", component: ModelViewer},
    {path: "/model-browser", name: "ModelBrowser", component: ModelBrowser},
    {path: "/settings", name: "Settings", component: SettingsComponent},
    // TODO: Include other routes
])
export class AppComponent { }
