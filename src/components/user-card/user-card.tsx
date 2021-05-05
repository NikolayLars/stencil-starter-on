import { Component, Host, h, Element, Prop} from '@stencil/core';

@Component({
  tag: 'user-card',
  styleUrl: 'user-card.css',
  shadow: true,
  assetsDirs: ['Assets'],
})
export class SlideComponent {

  @Element() el: HTMLElement;
  @Prop() picture1 ='./Assets/sports-car.png'

  createUser(){
    console.log("createUSer");
    const userCards = [];
    const email = this.el.querySelectorAll('[slot="email"]');
    const name = this.el.querySelectorAll('[slot="name"');
    if (email) {
      email.forEach(userCard => userCards.push(userCard.innerHTML));
    }
    if (name){
      name.forEach(userCard => userCards.push(userCard.innerHTML));
    }
    return userCards;
  }

  /*
  const template = document.createElement('template');
template.innerHTML = `
  <div class="user-card">
    <img />
    <div>
      <h3></h3>
      <div class="info">
        <p><slot name="email" /></p>
        <p><slot name="phone" /></p>
      </div>
      <button id="toggle-info">Hide Info</button>
    </div>
  </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    
    this.showInfo = true;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;

    const info = this.shadowRoot.querySelector('.info');
    const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

    if(this.showInfo) {
      info.style.display = 'block';
      toggleBtn.innerText = 'Hide Info';
    } else {
      info.style.display = 'none';
      toggleBtn.innerText = 'Show Info';
    }
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').removeEventListener();
  }
}

window.customElements.define('user-card', UserCard); */ 
  render() {
    return (
      <Host>
        <div class="user-card">
        {this.createUser()}
        <img  src={this.picture1} alt="Auto"/>
        </div>
        
        <slot></slot>
        
      </Host>
    );
  }

}
/*
    <user-card name="John Doe" avatar="https://randomuser.me/api/portraits/men/1.jpg">
        <div slot="email">johndoe@gmail.com</div>
        <div slot="phone">555-555-5555</div>
      </user-card>
      <user-card name="Jane Doe" avatar="https://randomuser.me/api/portraits/women/1.jpg">
        <div slot="email">janedoe@gmail.com</div>
        <div slot="phone">333-333-3333</div>
      </user-card>
      */
