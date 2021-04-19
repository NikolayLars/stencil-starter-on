var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, /*Host,*/ h, Prop, Method } from '@stencil/core';
let MorizComponent = class MorizComponent {
    darkmode() {
    }
    render() {
        return (
        //<Host>
        h("div", { class: "container-fluid" },
            h("h2", null, "Adresse:"),
            h("p", null,
                this.street,
                this.city,
                this.plz))
        //</Host>
        );
    }
};
__decorate([
    Prop()
], MorizComponent.prototype, "street", void 0);
__decorate([
    Prop()
], MorizComponent.prototype, "city", void 0);
__decorate([
    Prop()
], MorizComponent.prototype, "plz", void 0);
__decorate([
    Prop()
], MorizComponent.prototype, "socialMedia", void 0);
__decorate([
    Method()
], MorizComponent.prototype, "darkmode", null);
MorizComponent = __decorate([
    Component({
        tag: 'moriz-component',
        styleUrl: 'moriz-component.css',
        shadow: true,
    })
], MorizComponent);
export { MorizComponent };
