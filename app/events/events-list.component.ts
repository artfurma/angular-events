import {Component, OnInit} from "@angular/core";
import {IEvent} from "./shared/event.model";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: 'app/events/events-list.component.html',
})
export class EventsListComponent implements OnInit {

    events: IEvent[];

    constructor(private _route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.events = this._route.snapshot.data['events'];
    }

}