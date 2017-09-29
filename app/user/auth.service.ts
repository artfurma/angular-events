import {Injectable} from "@angular/core";
import {IUser} from "./user.model";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {

    currentUser: IUser;

    constructor(private _http: Http) {
    }

    loginUser(userName: string, password: string) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let loginInfo = {username: userName, password: password};

        return this._http.post('api/login', JSON.stringify(loginInfo), options).do((response: Response) => {
            if (response) {
                this.currentUser = <IUser>response.json().user;
            }
        }).catch(error => {
            return Observable.of(false);
        });
    }

    logout() {
        this.currentUser = undefined;

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this._http.post('/api/logout', JSON.stringify({}), options);
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this._http.put(`/api/users/${this.currentUser.id}`, JSON.stringify(this.currentUser), options);
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

    checkAuthenticationStatus() {
        return this._http.get('/api/currentIdentity').map((response: any) => {
            if (response._body) {
                return response.json();
            }
            return {};
        }).do(currentUser => {
            if (!!currentUser.userName) {
                this.currentUser = currentUser;
            } else {
                this.currentUser = null;
            }
        }).subscribe();
    }
}