import { Component, Host, h, Element, Prop, getAssetPath} from '@stencil/core';

@Component({
  tag: 'user-card',
  styleUrl: 'user-card.css',
  shadow: true,
})
export class SlideComponent {

  @Element() el: HTMLElement;
  @Prop() picture1 = './sports-car.png';

  createUser(){
    console.log("createUSer");
    const userCards = [];
    const email = this.el.querySelectorAll('[slot="email"]');
    const name = this.el.querySelectorAll('[slot="name"');
    const telefon = this.el.querySelectorAll('[slot="telefon"');
    const text = this.el.querySelectorAll('[slot="text"');
    if (email) {
      email.forEach(userCard => userCards.push(userCard.innerHTML));
    }
    if (name){
      name.forEach(userCard => userCards.push(userCard.innerHTML));
    }
    if (telefon){
      telefon.forEach(userCard => userCards.push(userCard.innerHTML));
    }
    if (text){
      text.forEach(userCard => userCards.push(userCard.innerHTML));
    }
    return userCards;
  }

  render() {
    return (
      <Host>
        <div class="user-card">
        {this.createUser()}
        <img id="bild" src={getAssetPath(`./assets/${this.picture1}`)} alt="bild"/>
        </div>
        
        <slot></slot>
        
      </Host>
    );
  }

}
