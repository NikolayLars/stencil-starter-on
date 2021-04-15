import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'moriz-component',
  styleUrl: 'moriz-component.css',
  shadow: true,
})
export class MorizComponent {

  @ Prop() adress: String

  @ Prop() socialMedia: any



  render() {
    return (
      <Host>
        <p>Adresse:
          
        </p>
        <slot></slot>
      </Host>
    );
  }

}
