import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'app/user/profile.component.html',
    styleUrls: ['app/user/profile.component.css']
})
export class ProfileComponent implements OnInit {

    profileForm: FormGroup;
    firstName: FormControl;
    lastName: FormControl;

    constructor(private _authService: AuthService, private _router: Router) {

    }

    ngOnInit(): void {
        this.firstName = new FormControl(this._authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new FormControl(this._authService.currentUser.lastName, Validators.required);

        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        })
    }

    saveProfile(formValues): void {
        if (this.profileForm.valid) {
            this._authService.updateCurrentUser(formValues.firstName, formValues.lastName);
            this._router.navigate(['events']);
        }
    }

    validateFirstName(): boolean {
        return this.firstName.valid || this.firstName.untouched;
    }

    validateLastName(): boolean {
        return this.lastName.valid || this.lastName.untouched;
    }

    cancel(): void {
        this._router.navigate(['events']);
    }
}