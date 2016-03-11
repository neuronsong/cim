import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {PatternSelector} from "./pattern-selector/pattern-selector.component";
import {ModelCreator} from "./model-creator/model-creator.component";
import {ModelEditor} from "./model-editor/model-editor.component";
import {ModelViewer} from "./model-viewer/model-viewer.component";
import {ModelBrowser} from "./model-browser/model-browser.component";
import {Settings} from "./settings/settings.component";

import {PatternSelectorService} from "./pattern-selector/pattern-selector.service";
import {SettingsService} from "./settings/settings.service";

@Component({
    selector: "cimi-editor",
    template: `

        <div class="navbar-fixed">
            <nav>
                <div class="nav-wrapper" style="padding-right:10px; padding-left: 10px;">
                    <a class="brand-logo" [routerLink]="['PatternSelector']">CIMI Editor</a>
                    <ul class="right hide-on-med-and-down">
                        <li><a [routerLink]="['PatternSelector']">Pattern Selector</a></li>
                        <li><a [routerLink]="['ModelCreator']">Model Creator</a></li>
                        <li><a [routerLink]="['ModelViewer']">Model Viewer</a></li>
                        <li><a [routerLink]="['ModelEditor']">Model Editor</a></li>
                        <li><a [routerLink]="['ModelBrowser']">Model Browser</a></li>
                        <li><a [routerLink]="['Settings']">Settings</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="container">
            <router-outlet></router-outlet>
        </div>  
    `,
    styleUrls:  ["./app/components/app.component.css", "./app/core/main.css", "./app/utilities/utility.css"],
    providers:  [SettingsService, PatternSelectorService],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: "/pattern-selector", name: "PatternSelector", component: PatternSelector, useAsDefault: true},
    {path: "/model-creator", name: "ModelCreator", component: ModelCreator},
    {path: "/model-editor", name: "ModelEditor", component: ModelEditor},
    {path: "/model-viewer", name: "ModelViewer", component: ModelViewer},
    {path: "/model-browser", name: "ModelBrowser", component: ModelBrowser},
    {path: "/settings", name: "Settings", component: Settings},
    // TODO: Include other routes
])
export class AppComponent { }
