var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Host, h, Prop } from '@stencil/core';
let MorizCompronent2 = class MorizCompronent2 {
    render() {
        return (h(Host, null,
            h("p", null, this.street)));
    }
};
__decorate([
    Prop()
], MorizCompronent2.prototype, "street", void 0);
MorizCompronent2 = __decorate([
    Component({
        tag: 'moriz-compronent2',
        styleUrl: 'moriz-compronent2.css',
        shadow: true,
    })
], MorizCompronent2);
export { MorizCompronent2 };
