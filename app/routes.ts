import {Routes} from "@angular/router";
import {Error404Component} from "./errors/404.component";

import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventsListResolverService,
    CreateSessionComponent,
    EventResolverService
} from './events/index'

export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService}},
    {path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolverService}},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: '**', component: EventsListComponent}
];