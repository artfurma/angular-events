import {Component, OnInit} from "@angular/core";
import {IEvent} from "./shared/event.model";
import {ToastrService} from "../common/toastr.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: 'app/events/events-list.component.html',
})
export class EventsListComponent implements OnInit {

    events: IEvent[];

    constructor(private _toastrService: ToastrService, private _route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.events = this._route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName: string) {
        this._toastrService.success(eventName);
    }
}