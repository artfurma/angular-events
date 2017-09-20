import {Directive, ElementRef, Inject, Input, OnInit} from '@angular/core';
import {JQ_TOKEN} from "./jquery.service";

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

    private element: HTMLElement;
    @Input('modal-trigger') modalId: string;

    constructor(@Inject(JQ_TOKEN) private $: any, private ref: ElementRef) {
        this.element = ref.nativeElement;
    }

    ngOnInit() {
        this.element.addEventListener('click', ev => {
            this.$(`#${this.modalId}`).modal({});
        });
    }
}