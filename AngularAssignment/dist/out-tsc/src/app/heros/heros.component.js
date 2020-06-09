import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HerosComponent = class HerosComponent {
    constructor() {
        this.herodetails = { id: 2, name: "Peter" };
    }
    ngOnInit() {
        this.hero = "Jack";
    }
};
HerosComponent = __decorate([
    Component({
        selector: 'app-heros',
        templateUrl: './heros.component.html',
        styleUrls: ['./heros.component.css']
    })
], HerosComponent);
export { HerosComponent };
//# sourceMappingURL=heros.component.js.map