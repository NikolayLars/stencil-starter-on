import { Component, Host, h , Prop , Element, State} from '@stencil/core';

@Component({
  tag: 'jona-component',
  styleUrl: 'jona-component.css',
  shadow: true,
})
export class JonaComponent {
  @Prop({ reflect: true, mutable: true }) slHeroHeadline: string;
  @Element() el: HTMLElement;

  @State() remainingButtonClicked: boolean = false;

  getProducts() {
    const products = [];
    const productsSlot = this.el.querySelectorAll('[slot="jona-component-product"]');
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
            btn.remove();
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
    const jsxContent = [];
    this.getProducts().filter((_pr, index) => {return index > 1 ? true : false;})
      .map(product => jsxContent.push(<li innerHTML={product}></li>));
    return jsxContent;
  }

  //addClosingButton(){

  /*  jsxContent.push(
    <button id="closingButton"
          onClick={e => {
            this.remainingButtonClicked = true;
            const btn = e.target as HTMLButtonElement;
            btn.remove();
          }}
        >
          mehr anzeigen
        </button>,
    )}
*/
  render() {
    return (
      <Host>
        <div class="jona-component">
          <h2 id="jona-component-headline">{this.slHeroHeadline.toUpperCase()}</h2>
          <p>Hier könnten wir noch iwelche Daten reinschreiben. Und hier oben ein kleiner Text um sich zu beschreiben! #Headline.</p>
        </div>
        <div id="jona-component-products">
          <ul>
            {this.getProductsContent()}
            {this.remainingButtonClicked ? this.addRemainingProducts() : ''} 
          </ul>
        </div>
      </Host>
    );
  }

}