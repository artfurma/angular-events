import {Component} from "@angular/core";
import {AuthService} from "../user/auth.service";

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styleUrls: ['app/nav/navbar.component.css']
})
export class NavbarComponent {

    constructor(private _authService: AuthService) {

    }

}