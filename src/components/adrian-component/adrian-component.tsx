import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'adrian-component',
  styleUrl: 'adrian-component.css',
  shadow: true,
})
export class AdrianComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
