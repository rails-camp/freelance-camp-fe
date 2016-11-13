"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var app_component_1 = require('./app.component');
var homepage_component_1 = require('./homepage/homepage.component');
var documents_component_1 = require('./documents/documents.component');
var document_service_1 = require('./documents/document.service');
var proposal_list_component_1 = require('./proposal/proposal-list.component');
var proposal_new_component_1 = require('./proposal/proposal-new.component');
var proposal_show_component_1 = require('./proposal/proposal-show.component');
var app_routing_module_1 = require('./app-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                homepage_component_1.HomepageComponent,
                documents_component_1.DocumentsComponent,
                proposal_list_component_1.ProposalListComponent,
                proposal_new_component_1.ProposalNewComponent,
                proposal_show_component_1.ProposalShowComponent
            ],
            providers: [
                document_service_1.DocumentService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map