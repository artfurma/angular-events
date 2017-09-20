import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivatorService,
    EventsListResolverService,
    CreateSessionComponent,
    DurationPipe
} from './events/index'
import {
    JQ_TOKEN,
    TOASTR_TOKEN,
    Toastr,
    CollapsableWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective
} from './common/index';
import {EventsAppComponent} from "./events-app.component";
import {NavbarComponent} from "./nav/navbar.component";
import {appRoutes} from "./routes";
import {Error404Component} from "./errors/404.component";
import {AuthService} from "./user/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SessionListComponent} from "./events/event-details/session-list.component";

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavbarComponent,
        CreateEventComponent,
        CreateSessionComponent,
        SessionListComponent,
        CollapsableWellComponent,
        SimpleModalComponent,
        Error404Component,
        ModalTriggerDirective,
        DurationPipe
    ],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService,
        {provide: TOASTR_TOKEN, useValue: toastr},
        {provide: JQ_TOKEN, useValue: jQuery},
        EventRouteActivatorService,
        EventsListResolverService,
        {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
        AuthService
    ]
})
export class AppModule {
}

function checkDirtyState(component: CreateEventComponent): boolean {
    if (component.isDirty) {
        return confirm('You have not saved this event, do you really want to cancel?');
    }
    return true;
}
