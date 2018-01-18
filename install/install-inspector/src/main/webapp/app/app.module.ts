import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { InspectorSharedModule, UserRouteAccessService } from './shared';
import { InspectorAppRoutingModule} from './app-routing.module';
import { InspectorHomeModule } from './home/home.module';
import { InspectorAdminModule } from './admin/admin.module';
import { InspectorAccountModule } from './account/account.module';
import { InspectorEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import {MaterialModule} from './material.module';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        InspectorAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        InspectorSharedModule,
        InspectorHomeModule,
        InspectorAdminModule,
        InspectorAccountModule,
        InspectorEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class InspectorAppModule {}