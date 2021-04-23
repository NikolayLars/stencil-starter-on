var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Host, h, Prop, Event, Listen, Method } from '@stencil/core';
let ExampleComponent = class ExampleComponent {
    clickListener() {
        console.log("clicked");
    }
    async exampleToUpperCase() {
        this.exampleProp.toUpperCase;
    }
    exampleHandler(ev) {
        console.log(ev);
        this.exampleEvent.emit("custom value");
    }
    componentDidLoad() {
        console.log("Component loaded");
    }
    render() {
        return (h(Host, null,
            this.exampleProp && h("h2", null,
                " ",
                this.exampleProp,
                " "),
            h("slot", null),
            h("br", null),
            h("button", { onClick: (ev) => this.exampleHandler(ev) }, "exampleEvent abgeben")));
    }
};
__decorate([
    Prop()
], ExampleComponent.prototype, "exampleProp", void 0);
__decorate([
    Event()
], ExampleComponent.prototype, "exampleEvent", void 0);
__decorate([
    Listen("click")
], ExampleComponent.prototype, "clickListener", null);
__decorate([
    Method()
], ExampleComponent.prototype, "exampleToUpperCase", null);
ExampleComponent = __decorate([
    Component({
        tag: 'example-component',
        styleUrl: 'example-component.css',
        shadow: true,
    })
], ExampleComponent);
export { ExampleComponent };
