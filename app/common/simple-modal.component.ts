import {Component, ElementRef, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {JQ_TOKEN} from "./jquery.service";

@Component({
    moduleId: module.id,
    selector: 'simple-modal',
    templateUrl: 'simple-modal.component.html',
    styleUrls: ['simple-modal.component.css']
})

export class SimpleModalComponent implements OnInit {

    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;
    @ViewChild('modalcontainer') containerElement: ElementRef;

    constructor(@Inject(JQ_TOKEN) private $: any) {
    }

    ngOnInit(): void {
    }

    closeModal(): void {
        if (this.closeOnBodyClick === "true") {
            this.$(this.containerElement.nativeElement).modal('hide');
        }
    }
}