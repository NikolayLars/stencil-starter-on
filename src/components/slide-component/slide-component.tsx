import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'slide-component',
  styleUrl: 'slide-component.css',
  shadow: true,
})
export class SlideComponent {

/*
template = document.createElement('template');
this.template.innerHTML = `
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
        <slot></slot>
      </Host>
    );
  }

}
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;1,400&display=swap" rel="stylesheet"> 
    <script defer src= "user-card.js"></script>
    <title>Web Components Example</title>
</head>
<body>
    <user-card name="John Doe" avatar="https://randomuser.me/api/portraits/men/1.jpg">
        <div slot="email">johndoe@gmail.com</div>
        <div slot="phone">555-555-5555</div>
      </user-card>
      <user-card name="Jane Doe" avatar="https://randomuser.me/api/portraits/women/1.jpg">
        <div slot="email">janedoe@gmail.com</div>
        <div slot="phone">333-333-3333</div>
      </user-card>
</body>
</html> */ 