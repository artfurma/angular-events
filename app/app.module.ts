import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventsListResolverService,
    CreateSessionComponent,
    DurationPipe,
    UpvoteComponent,
    VoterService,
    ValidateLocationDirective,
    EventResolverService
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
import {HttpModule} from "@angular/http";

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
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
        UpvoteComponent,
        Error404Component,
        ModalTriggerDirective,
        ValidateLocationDirective,
        DurationPipe
    ],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService,
        {provide: TOASTR_TOKEN, useValue: toastr},
        {provide: JQ_TOKEN, useValue: jQuery},
        EventsListResolverService,
        EventResolverService,
        {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
        AuthService,
        VoterService
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
