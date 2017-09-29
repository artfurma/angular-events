import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'app/user/login.component.html',
    styleUrls: ['app/user/login.component.css']
})
export class LoginComponent {

    loginInvalid = false;

    constructor(private _authService: AuthService, private _router: Router) {

    }

    login(formValues: any) {
        this._authService.loginUser(formValues.userName, formValues.password).subscribe(response => {
            if (!response) {
                this.loginInvalid = true;
            } else {
                this._router.navigate(['events']);
            }
        });
    }

    cancel(): void {
        this._router.navigate(['events']);
    }
}