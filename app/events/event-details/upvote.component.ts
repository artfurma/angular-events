import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'upvote',
    templateUrl: 'app/events/event-details/upvote.component.html',
    styleUrls: ['app/events/event-details/upvote.component.css']
})

export class UpvoteComponent implements OnInit {

    @Input() count: number;
    @Output() vote = new EventEmitter();

    @Input()
    set voted(val) {
        this.iconColor = val ? 'red' : 'white';
    }


    iconColor: string;

    constructor() {
    }

    ngOnInit() {
    }

    onClick() {
        this.vote.emit({});
    }
}