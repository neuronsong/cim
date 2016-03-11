import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {PatternSelector} from "./pattern-selector/pattern-selector.component";
import {ModelCreator} from "./model-creator/model-creator.component";
import {ModelEditor} from "./model-editor/model-editor.component";
import {ModelViewer} from "./model-viewer/model-viewer.component";
import {ModelBrowser} from "./model-browser/model-browser.component";
import {Settings} from "./settings/settings.component";
import {Sidenav} from "./sidenav/sidenav.component";

@Component({
    selector: "cimi-editor",
    template: `
        <div class="row">
            <sidenav class="col-lg-3 col-md-4 col-sm-6 row"></sidenav>
            <div class="content col-lg-9 col-md-8 col-sm-6">
                <router-outlet></router-outlet>
            </div>   
        </div>  
    `,
    styleUrls:  ["./app/components/app.component.css", "./app/utilities/utility.css"],
    directives: [ROUTER_DIRECTIVES, Sidenav]
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
