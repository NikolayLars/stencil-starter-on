import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'moriz-compronent2',
  styleUrl: 'moriz-compronent2.css',
  shadow: true,
})
export class MorizCompronent2 {
  @Prop() street: string;

  render() {
    return (
      <Host>
        <h1>Hallo hallo</h1>
        <p>{this.street}</p>
      </Host>
    );
  }
}
