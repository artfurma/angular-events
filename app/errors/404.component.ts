import {Component} from '@angular/core'

@Component({
    template: `
        <div class="errorMessage text-center">
            <img src="app/assets/images/404.jpg"/>
        </div>
    `,
    styles: [`
        .errorMessage {
            display: block;
            margin: auto;
        }`]
})
export class Error404Component {
    constructor() {

    }

}