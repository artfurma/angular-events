import {Component, OnInit} from "@angular/core";
import {AuthService} from "./user/auth.service";

@Component({
    selector: 'events-app',
    templateUrl: 'app/events-app.component.html'
})
export class EventsAppComponent implements OnInit{

    constructor(private _auth: AuthService) {

    }

    ngOnInit() {
        this._auth.checkAuthenticationStatus();
    }

}