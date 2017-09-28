import {Injectable} from "@angular/core";
import {IEvent} from "./shared/event.model";
import {Resolve} from "@angular/router";
import {EventService} from "./shared/event.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class EventsListResolverService implements Resolve<IEvent[]> {

    constructor(private _eventService: EventService) {

    }

    resolve(): Observable<IEvent[]> {
        return this._eventService.getEvents();
    }
}