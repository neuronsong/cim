"use strict";

// import Angular 2
import {Component} from "angular2/core";

// import Angular 2 Component Router
// reference: http://blog.thoughtram.io/angular/2015/06/16/routing-in-angular-2.html
import {RouteConfig, Route, RouterOutlet, RouterLink, Router} from "angular2/router";

// app components
import {PatternSelector} from "../components/pattern-selector/pattern-selector.component";
import {ModelDetailer} from "../components/model-detailer/model-detailer.component";
import {ModelBuilder} from "../components/model-builder/model-builder.component";
import {ModelExporter} from "../components/model-exporter/model-exporter.component";
import {ModelBrowser} from "../components/model-browser/model-browser.component";
import {Settings} from "../components/settings/settings.component";
import {SidenavComponent} from "../components/sidenav/sidenav.component";

// app services
//import {appServicesInjectables} from "core/services/services";
import {PatternSelectorService} from "../components/pattern-selector/pattern-selector.service";
import {SettingsService} from "../components/settings/settings.service";


@Component({
	selector: "app",
	template: `
        <div class="row full-height">
            <sidenav class="col-lg-3 col-md-4 col-sm-6 row full-height"></sidenav>
            <div class="content col-lg-9 col-md-8 col-sm-6 full-height">
                <router-outlet></router-outlet>
            </div>   
        </div>
    `,
    styleUrls:  ["./app/core/app.css"],
	directives: [RouterOutlet, RouterLink, SidenavComponent]
})
@RouteConfig([
    {path: "/pattern-selector", name: "PatternSelector", component: PatternSelector, useAsDefault: true},
    {path: "/model-detailer", name: "ModelDetailer", component: ModelDetailer},
    {path: "/model-builder", name: "ModelBuilder", component: ModelBuilder},
    {path: "/model-exporter", name: "ModelExporter", component: ModelExporter},
    {path: "/model-browser", name: "ModelBrowser", component: ModelBrowser},
    {path: "/settings", name: "Settings", component: Settings},
])
export class App {
	constructor() {
		console.log("Application bootstrapped!");
	}
}

