import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'jona-component',
  styleUrl: 'jona-component.css',
  shadow: true,
})
export class JonaComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
