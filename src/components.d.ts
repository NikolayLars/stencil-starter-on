/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AdrianComponent {
    }
    interface ExampleComponent {
        "exampleProp": string;
        "exampleToUpperCase": () => Promise<void>;
    }
    interface HeaderLn {
    }
    interface JonaComponent {
    }
    interface JuliaComponent {
        "titel": string;
    }
    interface MellyComponent {
    }
    interface MorizComponent {
        "Unternehmensseiten": String[];
        "city": String;
        "imageFacebook": string;
        "imageInstagram": string;
        "imageLinkedIn": string;
        "imageMastercard": string;
        "imagePayPal": string;
        "imageTwitter": string;
        "imageVisa": string;
        "imageWhatsapp": string;
        "imageXing": string;
        "imageYouTube": string;
        "plz": String;
        "socialMedia": any;
        "street": String;
    }
    interface MorizCompronent2 {
        "street": String;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLAdrianComponentElement extends Components.AdrianComponent, HTMLStencilElement {
    }
    var HTMLAdrianComponentElement: {
        prototype: HTMLAdrianComponentElement;
        new (): HTMLAdrianComponentElement;
    };
    interface HTMLExampleComponentElement extends Components.ExampleComponent, HTMLStencilElement {
    }
    var HTMLExampleComponentElement: {
        prototype: HTMLExampleComponentElement;
        new (): HTMLExampleComponentElement;
    };
    interface HTMLHeaderLnElement extends Components.HeaderLn, HTMLStencilElement {
    }
    var HTMLHeaderLnElement: {
        prototype: HTMLHeaderLnElement;
        new (): HTMLHeaderLnElement;
    };
    interface HTMLJonaComponentElement extends Components.JonaComponent, HTMLStencilElement {
    }
    var HTMLJonaComponentElement: {
        prototype: HTMLJonaComponentElement;
        new (): HTMLJonaComponentElement;
    };
    interface HTMLJuliaComponentElement extends Components.JuliaComponent, HTMLStencilElement {
    }
    var HTMLJuliaComponentElement: {
        prototype: HTMLJuliaComponentElement;
        new (): HTMLJuliaComponentElement;
    };
    interface HTMLMellyComponentElement extends Components.MellyComponent, HTMLStencilElement {
    }
    var HTMLMellyComponentElement: {
        prototype: HTMLMellyComponentElement;
        new (): HTMLMellyComponentElement;
    };
    interface HTMLMorizComponentElement extends Components.MorizComponent, HTMLStencilElement {
    }
    var HTMLMorizComponentElement: {
        prototype: HTMLMorizComponentElement;
        new (): HTMLMorizComponentElement;
    };
    interface HTMLMorizCompronent2Element extends Components.MorizCompronent2, HTMLStencilElement {
    }
    var HTMLMorizCompronent2Element: {
        prototype: HTMLMorizCompronent2Element;
        new (): HTMLMorizCompronent2Element;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "adrian-component": HTMLAdrianComponentElement;
        "example-component": HTMLExampleComponentElement;
        "header-ln": HTMLHeaderLnElement;
        "jona-component": HTMLJonaComponentElement;
        "julia-component": HTMLJuliaComponentElement;
        "melly-component": HTMLMellyComponentElement;
        "moriz-component": HTMLMorizComponentElement;
        "moriz-compronent2": HTMLMorizCompronent2Element;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface AdrianComponent {
    }
    interface ExampleComponent {
        "exampleProp"?: string;
        "onExampleEvent"?: (event: CustomEvent<string>) => void;
    }
    interface HeaderLn {
    }
    interface JonaComponent {
    }
    interface JuliaComponent {
        "titel"?: string;
    }
    interface MellyComponent {
    }
    interface MorizComponent {
        "Unternehmensseiten"?: String[];
        "city"?: String;
        "imageFacebook"?: string;
        "imageInstagram"?: string;
        "imageLinkedIn"?: string;
        "imageMastercard"?: string;
        "imagePayPal"?: string;
        "imageTwitter"?: string;
        "imageVisa"?: string;
        "imageWhatsapp"?: string;
        "imageXing"?: string;
        "imageYouTube"?: string;
        "plz"?: String;
        "socialMedia"?: any;
        "street"?: String;
    }
    interface MorizCompronent2 {
        "street"?: String;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "adrian-component": AdrianComponent;
        "example-component": ExampleComponent;
        "header-ln": HeaderLn;
        "jona-component": JonaComponent;
        "julia-component": JuliaComponent;
        "melly-component": MellyComponent;
        "moriz-component": MorizComponent;
        "moriz-compronent2": MorizCompronent2;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "adrian-component": LocalJSX.AdrianComponent & JSXBase.HTMLAttributes<HTMLAdrianComponentElement>;
            "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
            "header-ln": LocalJSX.HeaderLn & JSXBase.HTMLAttributes<HTMLHeaderLnElement>;
            "jona-component": LocalJSX.JonaComponent & JSXBase.HTMLAttributes<HTMLJonaComponentElement>;
            "julia-component": LocalJSX.JuliaComponent & JSXBase.HTMLAttributes<HTMLJuliaComponentElement>;
            "melly-component": LocalJSX.MellyComponent & JSXBase.HTMLAttributes<HTMLMellyComponentElement>;
            "moriz-component": LocalJSX.MorizComponent & JSXBase.HTMLAttributes<HTMLMorizComponentElement>;
            "moriz-compronent2": LocalJSX.MorizCompronent2 & JSXBase.HTMLAttributes<HTMLMorizCompronent2Element>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
