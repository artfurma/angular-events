import {Component, OnInit} from "@angular/core";
import {EventService} from "../shared/event.service";
import {IEvent} from "../shared/event.model";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styleUrls: ['app/events/event-details/event-details.component.css']

})
export class EventDetailsComponent implements OnInit {

    event: IEvent;

    constructor(private _eventService: EventService, private _route: ActivatedRoute) {

    }

    ngOnInit(): void {
        let eventId: number = +this._route.snapshot.params['id'];
        this.event = this._eventService.getEvent(eventId);
    }
}