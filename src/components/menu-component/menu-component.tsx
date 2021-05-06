import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'menu-component',
  styleUrl: 'menu-component.css',
  shadow: true,
})
export class MenuComponent {
  @Element() el: HTMLElement;
  @Prop() zeugs: string;
  @Prop() option1: string;
  @Prop() option2: string;
  @Prop() option3: string;
  @Prop() option4: string;
  @Prop() option5: string;

  /*
  getSubmenus() {
    const submenus = [];
    const submenusSlot = document.querySelectorAll('[slot="menu-component-dropdown"]');
    if (submenusSlot) {
      submenusSlot.forEach(submenu => submenus.push(submenu.childNodes));
    }
    return submenus;
  }
  var x = document.querySelector("#demo").childNodes;
  x.forEach(element => {
    arr.push(element.outerHTML);
  });
  console.log(arr);
*/
  render() {
    
    return (
      <Host>
    <div>
        <div class="menu-component">
          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
        </div>
        <div>
          <label htmlFor="">{this.zeugs}</label>
        <select name={this.zeugs}>
          <option value="1"><slot></slot></option>
          <option value="2">{this.option2}</option>
          <option value="3">{this.option3}</option>
          <option value="4">{this.option4}</option>
          <option value="5">{this.option5}</option>
        </select>
        </div>
        </div>
      </Host>
    );
  }

}
