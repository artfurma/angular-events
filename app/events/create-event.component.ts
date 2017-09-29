import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {EventService} from "./shared/event.service";
import {IEvent} from "./shared/event.model";

@Component({
    templateUrl: 'app/events/create-event.component.html',
    styleUrls: ['app/events/create-event.component.css']
})
export class CreateEventComponent {

    isDirty: boolean = true;

    constructor(private _router: Router, private _eventService: EventService) {

    }

    saveEvent(formValues: IEvent): void {
        this._eventService.saveEvent(formValues).subscribe(event => {
            this.isDirty = false;
            this._router.navigate(['/events']);
        });
    }

    cancel(): void {
        this._router.navigate(['/events']);
    }
}