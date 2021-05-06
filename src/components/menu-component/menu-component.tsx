import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'menu-component',
  styleUrl: 'menu-component.css',
  shadow: true,
})
export class MenuComponent {
  @Element() el: HTMLElement;
  @Prop() label: string;
  @Prop() label2: string;
  @Prop() label3: string;
  @Prop() option1: HTMLElement = <option>Tesla1</option>;
  @Prop() option2: HTMLElement = <option>Tesla2</option>;
  @Prop() option3: HTMLElement = <option>Tesla3</option>;
 //@Prop() option4: HTMLElement;
 // @Prop() option5: HTMLElement;

  
  getSubmenus() {
    const submenus = [];
    const submenusSlot = document.querySelectorAll('[slot="menu-component-dropdown"]');
    if (submenusSlot) {
      submenusSlot.forEach(submenu => submenus.push(submenu.childNodes));
    }
    return submenus;
  }

  createSubmenu(){
  const submenus = this.getSubmenus();
    let jsxContent = [];
    submenus.map(submenu => jsxContent.push(<select innerHTML={submenu}></select>));
    console.log(jsxContent);
    return jsxContent;
  }

  render() {
    
    return (
      <Host>
    <div>
        <div class="menu-component">
          <h2>Jetzt exklusiv bei uns: der TESLA-QUICKBUY.</h2>
        </div>
        <div>
          <label htmlFor="">{this.label}</label>
        <select >
          {this.option1}
          {this.option2}
          {this.option3}
        </select>
        <label htmlFor="">{this.label2}</label>
        <select>
          
        </select>

        </div>

        <button>
          Jetzt kaufen
        </button>
        </div>
      </Host>
    );
  }

}
