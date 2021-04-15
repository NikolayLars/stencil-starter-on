import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'moriz-component',
  styleUrl: 'moriz-component.css',
  shadow: true,
})
export class MorizComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
