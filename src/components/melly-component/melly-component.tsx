import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'melly-component',
  styleUrl: 'melly-component.css',
  shadow: true,
})
export class MellyComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
