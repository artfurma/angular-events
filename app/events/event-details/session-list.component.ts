import {Component, Input, OnChanges} from "@angular/core";
import {ISession} from "../shared/event.model";
import {AuthService} from "../../user/auth.service";
import {VoterService} from "./voter.service";

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'

})
export class SessionListComponent implements OnChanges {

    @Input() eventId: number;
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;

    visibleSessions: ISession[] = [];

    constructor(private _authService: AuthService, private _voterService: VoterService) {

    }

    ngOnChanges(): void {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
        }
    }

    toggleVote(session: ISession): void {
        if (this.userHasVoted(session)) {
            this._voterService.deleteVoter(this.eventId, session, this._authService.currentUser.userName);
        } else {
            this._voterService.addVoter(this.eventId, session, this._authService.currentUser.userName);
        }

        if (this.sortBy === 'votes') {
            this.visibleSessions.sort(sortByVotesDesc);
        }
    }

    userHasVoted(session: ISession) {
        return this._voterService.userHasVoted(session, this._authService.currentUser.userName);
    }

    filterSessions(filter: string): void {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter
            });
        }
    }
}

function sortByNameAsc(s1: ISession, s2: ISession): number {
    if (s1.name > s2.name) return 1;
    if (s1.name === s2.name) return 0;
    return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession): number {
    return s2.voters.length - s1.voters.length;
}