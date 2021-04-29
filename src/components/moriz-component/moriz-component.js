var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h, Prop, Host, getAssetPath, State } from '@stencil/core';
let MorizComponent = class MorizComponent {
    constructor() {
        //images
        this.imagePayPal = 'clipart4300803.png';
        this.imageFacebook = 'Facebook.png';
        this.imageInstagram = 'Insta.png';
        this.imageLinkedIn = 'LinkedIn.png';
        this.imageVisa = 'PikPng.com_visa-png_810129.png';
        this.imageMastercard = 'pngfind.com-master-card-logo-png-2088342.png';
        this.imageTwitter = 'Twitter.png';
        this.imageWhatsapp = 'whatsapp.png';
        this.imageXing = 'Xing.png';
        this.imageYouTube = 'YouTube.png';
        this.sitesObj = [];
        //----------------------
        this.toTop = (ev) => {
            console.log(ev);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };
    }
    render() {
        return (h(Host, null,
            h("div", { class: "container-fluid", id: "footer" },
                h("div", { class: "row" },
                    h("p", null,
                        h("button", { onClick: ev => this.toTop(ev) }, "exampleEvent abgeben"))),
                h("div", { class: "row" },
                    h("h1", null, "Stay in touch with us"),
                    h("p", null,
                        h("ul", { id: "#SocialMedia" },
                            h("li", null,
                                h("p", null,
                                    h("img", { class: "logosSM", src: getAssetPath(`./assets/${this.imageFacebook}`), alt: "Logo Facebook" }))),
                            h("li", null,
                                h("p", null,
                                    h("img", { class: "logosSM", src: getAssetPath(`./assets/${this.imageInstagram}`), alt: "Logo Instagram" }))),
                            h("li", null,
                                h("p", null,
                                    h("img", { class: "logosSM", src: getAssetPath(`./assets/${this.imageLinkedIn}`), alt: "Logo LinedIn" }))),
                            h("li", null,
                                h("p", null,
                                    h("img", { class: "logosSM", src: getAssetPath(`./assets/${this.imageTwitter}`), alt: "Logo Twitter" }))),
                            h("li", null,
                                h("p", null,
                                    h("img", { class: "logosSM", src: getAssetPath(`./assets/${this.imageXing}`), alt: "Logo Xing" }))),
                            h("li", null,
                                h("p", null,
                                    h("img", { class: "logosSM", src: getAssetPath(`./assets/${this.imageYouTube}`), alt: "Logo YouTube" }))),
                            h("li", null,
                                h("p", null,
                                    h("img", { class: "logosSM", src: getAssetPath(`./assets/${this.imageWhatsapp}`), alt: "Logo Whatsapp" })))))),
                h("div", { class: "col-6" },
                    h("h2", null, "Adresse:"),
                    h("p", null,
                        this.street,
                        " ",
                        h("br", null),
                        this.city,
                        " ",
                        h("br", null),
                        this.plz)),
                h("div", { class: "col-6" },
                    h("h2", null, "Unternehmensseiten:"),
                    h("p", null,
                        (this.sitesObj = JSON.parse(this.sites)),
                        this.sitesObj)),
                h("div", { class: "row" },
                    h("ul", null,
                        h("li", null,
                            h("p", null,
                                h("img", { class: "logosPay", src: getAssetPath(`./assets/${this.imagePayPal}`), alt: "Logo PayPal" }))),
                        h("li", null,
                            h("p", null,
                                h("img", { class: "logosPay", src: getAssetPath(`./assets/${this.imageVisa}`), alt: "Logo Visa" }))),
                        h("li", null,
                            h("p", null,
                                h("img", { class: "logosPay", src: getAssetPath(`./assets/${this.imageMastercard}`), alt: "Logo MasterCard" }))))))));
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
    Prop()
], MorizComponent.prototype, "imagePayPal", void 0);
__decorate([
    Prop()
], MorizComponent.prototype, "imageFacebook", void 0);
__decorate([
    Prop()
], MorizComponent.prototype, "imageInstagram", void 0);
__decorate([
    Prop()
], MorizComponent.prototype, "imageLinkedIn", void 0);
__decorate([
    Prop()
], MorizComponent.prototype, "imageVisa", void 0);
__decorate([
    Prop()
], MorizComponent.prototype, "imageMastercard", void 0);
__decorate([
    Prop()
], MorizComponent.prototype, "imageTwitter", void 0);
__decorate([
    Prop()
], MorizComponent.prototype, "imageWhatsapp", void 0);
__decorate([
    Prop()
], MorizComponent.prototype, "imageXing", void 0);
__decorate([
    Prop()
], MorizComponent.prototype, "imageYouTube", void 0);
__decorate([
    Prop()
], MorizComponent.prototype, "sites", void 0);
__decorate([
    State()
], MorizComponent.prototype, "sitesObj", void 0);
MorizComponent = __decorate([
    Component({
        tag: 'moriz-component',
        styleUrl: 'moriz-component.css',
        assetsDirs: ['assets'],
        shadow: true,
    })
], MorizComponent);
export { MorizComponent };
