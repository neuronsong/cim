import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {PatternSelector} from "./pattern-selector/pattern-selector.component";
import {ModelDetailer} from "./model-detailer/model-detailer.component";
import {ModelBuilder} from "./model-builder/model-builder.component";
import {ModelExporter} from "./model-exporter/model-exporter.component";
import {ModelBrowser} from "./model-browser/model-browser.component";
import {Settings} from "./settings/settings.component";
import {SidenavComponent} from "./sidenav/sidenav.component";

import {PatternSelectorService} from "./pattern-selector/pattern-selector.service";
import {SettingsService} from "./settings/settings.service";

@Component({
    selector: "cimi-editor",
    template: `
        <div>
            <div class="row">
                <sidenav class="col-lg-3 col-md-4 col-sm-6 row"></sidenav>
                <div class="content col-lg-9 col-md-8 col-sm-6">
                    <router-outlet></router-outlet>
                </div>   
            </div>
        </div>
    `,
    styleUrls:  ["./app/components/app.component.css", "./app/utilities/utility.css"],
    directives: [ROUTER_DIRECTIVES, SidenavComponent]
})
@RouteConfig([
    {path: "/pattern-selector", name: "PatternSelector", component: PatternSelector, useAsDefault: true},
    {path: "/model-detailer", name: "ModelDetailer", component: ModelDetailer},
    {path: "/model-builder", name: "ModelBuilder", component: ModelBuilder},
    {path: "/model-exporter", name: "ModelExporter", component: ModelExporter},
    {path: "/model-browser", name: "ModelBrowser", component: ModelBrowser},
    {path: "/settings", name: "Settings", component: Settings},
    // TODO: Include other routes
])
export class AppComponent { }
