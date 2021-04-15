import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'julia-component',
  styleUrl: 'julia-component.css',
  shadow: true,
})
export class JuliaComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
