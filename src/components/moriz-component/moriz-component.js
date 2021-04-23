var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h, Prop, Method, Host } from '@stencil/core';
let MorizComponent = class MorizComponent {
    darkmode() { }
    render() {
        return (h(Host, null,
            h("div", { class: "container-fluid", id: "footer" },
                h("div", { class: "row" },
                    h("h1", null, "Stay in touch with us"),
                    h("p", null,
                        h("ul", { id: "#SocialMedia" },
                            h("li", null,
                                h("p", null,
                                    h("img", { class: "logosSM", src: "../../../Bilder/Facebook.png", alt: "Logo Facebook" }))),
                            h("li", null,
                                h("p", null,
                                    h("img", { class: "logosSM", src: "../../../Bilder/Insta.png", alt: "Logo Instagram" }))),
                            h("li", null,
                                h("p", null,
                                    h("img", { class: "logosSM", src: "../../../Bilder/LinkedIn.png", alt: "Logo LinedIn" }))),
                            h("li", null,
                                h("p", null,
                                    h("img", { class: "logosSM", src: "../../../Bilder/Twitter.png", alt: "Logo Twitter" }))),
                            h("li", null,
                                h("p", null,
                                    h("img", { class: "logosSM", src: "../../../Bilder/Xing.png", alt: "Logo Xing" }))),
                            h("li", null,
                                h("p", null,
                                    h("img", { class: "logosSM", src: "../../../Bilder/YouTube.png", alt: "Logo YouTube" }))),
                            h("li", null,
                                h("p", null,
                                    h("img", { class: "logosSM", src: "../../../Bilder/whatsapp.png", alt: "Logo Whatsapp" })))))),
                h("div", { class: "col-6" },
                    h("h2", null, "Adresse:"),
                    h("p", null,
                        this.street,
                        this.city,
                        this.plz)),
                h("div", { class: "col-6" },
                    h("h2", null, "Unternehmensseiten:"),
                    h("p", null, () => {
                        for (var i = 0; i < this.Unternehmensseiten.length; i++) {
                            {
                                this.Unternehmensseiten[i];
                            }
                        }
                    })),
                h("div", { class: "row" },
                    h("ul", null,
                        h("li", null,
                            h("p", null,
                                h("img", { class: "logosPay", src: "../../../Bilder/clipart4300803.png", alt: "Logo PayPal" }))),
                        h("li", null,
                            h("p", null,
                                h("img", { class: "logosPay", src: "../../../Bilder/PikPng.com_visa-png_810129.png", alt: "Logo Visa" }))),
                        h("li", null,
                            h("p", null,
                                h("img", { class: "logosPay", src: "../../../Bilder/pngfind.com-master-card-logo-png-2088342.png", alt: "Logo MasterCard" }))))))));
    }
};
__decorate([
    Prop({ reflect: true })
], MorizComponent.prototype, "street", void 0);
__decorate([
    Prop()
], MorizComponent.prototype, "city", void 0);
__decorate([
    Prop()
], MorizComponent.prototype, "plz", void 0);
__decorate([
    Prop()
], MorizComponent.prototype, "Unternehmensseiten", void 0);
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
