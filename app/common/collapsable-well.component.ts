import {Component} from "@angular/core";

@Component({
    selector: 'collapsable-well',
    templateUrl: 'app/common/collapsable-well.component.html'
})
export class CollapsableWellComponent {

    visible: boolean = true;

    toggleContent() {
        this.visible = !this.visible;
    }
}