import {Component, OnInit} from "@angular/core";
import {EventService} from "../shared/event.service";
import {IEvent, ISession} from "../shared/event.model";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styleUrls: ['app/events/event-details/event-details.component.css']

})
export class EventDetailsComponent implements OnInit {

    event: IEvent;
    addMode: boolean;
    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor(private _eventService: EventService, private _route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this._route.data.forEach((data) => {
            this.event = data['event'];
            this.addMode = false;
        });
    }

    addSession(): void {
        this.addMode = true;
    }

    saveNewSession(session: ISession): void {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;

        this.event.sessions.push(session);
        this._eventService.saveEvent(this.event).subscribe();
        this.addMode = false;
    }

    cancelAddSession(): void {
        this.addMode = false;
    }
}