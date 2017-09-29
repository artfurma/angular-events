import {Injectable} from '@angular/core';
import {ISession} from "../shared/event.model";
import {RequestOptions, Headers, Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class VoterService {

    constructor(private _http: Http) {
    }

    addVoter(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName);

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        this._http.post(url, JSON.stringify({}), options).catch(this.handleError).subscribe();
    }

    deleteVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName);
        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this._http.delete(url).catch(this.handleError).subscribe();
    }

    userHasVoted(session: ISession, voterName: string): boolean {
        return session.voters.some(voter => voter === voterName);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}