import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'map-component',
  styleUrl: 'map-component.css',
})
export class MapComponent {
  @Prop() location: string;
  @Prop() adress: string;
  @Prop() streetNumber: string;

  render() {
    /* var Source: string;
    Source =
      'https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=' +
      { this: this.adress } +
      '%20str.%20' +
      { this: this.streetNumber } +
      '+(Test)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed';
      */

    return (
      <Host>
        <div id="map">
          <iframe
            width="700"
            height="440"
            src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Lotharweg%20str.%2010+(Test)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
            /* So wäre es final top:
            src= Source;
            */
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
        <br />
      </Host>
    );
  }
}
