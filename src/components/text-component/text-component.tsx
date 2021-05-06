import { Component, Host, h , Prop , Element, State} from '@stencil/core';


@Component({
  tag: 'text-component',
  styleUrl: 'text-component.css',
  shadow: true,
})
export class TextComponent {
  @Prop({ reflect: true, mutable: true }) slHeroHeadline: string;
  @Element() el: HTMLElement;
  @State() remainingButtonClicked: boolean = false;
  @Prop() position: string;
  host: HTMLElement;

  choosePosition() {
    this.host.classList.add('right');
  }



  getProducts() {
    const products = [];
    const productsSlot = this.el.querySelectorAll('[slot="text-component-product"]');
    if (productsSlot) {
      productsSlot.forEach(product => products.push(product.innerHTML));
    }
    return products;
  }
  
  getProductsContent() {
    const products = this.getProducts();
    let jsxContent = [];

    products.map(product => jsxContent.push(<li innerHTML={product}></li>));

    if (jsxContent.length >= 3) {
      jsxContent = jsxContent.filter((_product, index) => (index <= 1 ? true : false));
      jsxContent.push(
        <button
          id="addProductsButton"
          onClick={e => {
            this.remainingButtonClicked = true;
            const btn = e.target as HTMLButtonElement;
            btn;
            //.style.color = "#f4f4f4";
          }}
        >
          mehr anzeigen
        </button>,
      );
    } else {
      return jsxContent.map(el => el);
    }

    return jsxContent;
  }

  addRemainingProducts() {
    let jsxContent = [];
    this.getProducts().filter((_pr, index) => {return index > 1 ? true : false;})
      .map(product => jsxContent.push(<li innerHTML={product}></li>));
      jsxContent.push(
        <button id="closingButton"
            onClick={e => {
              this.remainingButtonClicked = false;
              const btn2 = e.target as HTMLButtonElement;
              btn2
              //.style.color = "red";
            }}
          >
            weniger anzeigen
          </button>,
          );
    return jsxContent;
  }
  
  render() {
    
    return (
      <Host>
        <div>
        <div class="text-component">
          <h2 id="text-component-headline">{this.slHeroHeadline.toUpperCase()}</h2>
          <p>Das Tesla Model X jetzt nicht im Angebot. Schlag Sie jetzt zu bei unfassbar normalen Preisen! #Headline.</p>
        </div>
        <ul>
        {this.getProductsContent()}
        </ul>
        <div id="text-component-products">
          <ul>
            {this.remainingButtonClicked ? this.addRemainingProducts() : ''}
          </ul>
        </div>
        </div>
      </Host>
    );
  }

}