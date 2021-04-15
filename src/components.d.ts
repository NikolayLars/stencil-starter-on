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
    interface JonaComponent {
    }
    interface JuliaComponent {
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
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "adrian-component": HTMLAdrianComponentElement;
        "example-component": HTMLExampleComponentElement;
        "jona-component": HTMLJonaComponentElement;
        "julia-component": HTMLJuliaComponentElement;
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
    interface JonaComponent {
    }
    interface JuliaComponent {
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
        "jona-component": JonaComponent;
        "julia-component": JuliaComponent;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "adrian-component": LocalJSX.AdrianComponent & JSXBase.HTMLAttributes<HTMLAdrianComponentElement>;
            "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
            "jona-component": LocalJSX.JonaComponent & JSXBase.HTMLAttributes<HTMLJonaComponentElement>;
            "julia-component": LocalJSX.JuliaComponent & JSXBase.HTMLAttributes<HTMLJuliaComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
