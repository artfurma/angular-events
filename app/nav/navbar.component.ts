import {Component} from "@angular/core";
import {AuthService} from "../user/auth.service";
import {ISession} from "../events/shared/event.model";
import {EventService} from "../events/shared/event.service";

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styleUrls: ['app/nav/navbar.component.css']
})
export class NavbarComponent {

    searchTerm: string = "";
    foundSessions: ISession[];

    constructor(private _authService: AuthService, private _eventService: EventService) {

    }

    searchSessions(searchTerm: string): void {
        this._eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
            console.log(this.foundSessions);
        })
    }
}