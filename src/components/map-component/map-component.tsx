import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'map-component',
  styleUrl: 'map-component.css',
})
export class MapComponent {
  @Prop() location: string;
  @Prop() adress: string;
  @Prop() streetnumber: string;

  render() {
    var adressJS = [];
    adressJS.push(this.adress);
    var streetnumberJS = [];
    streetnumberJS.push(this.streetnumber);
    var source: string;
    var maps1 = 'https://maps.google.com/maps?width=1400&amp;height=440&amp;hl=en&amp;q=';
    var maps2 = '%20str.%20';
    var maps3 = '+(Test)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;';

    /*source = `https://maps.google.com/maps?width=1400&amp;height=440&amp;hl=en&amp;q=${adressJS}%20str.%20${streetnumberJS}+(Test)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed`;*/
    source = `${maps1}${adressJS}${maps2}${streetnumberJS}${maps3}`;
    /*var source2 = source;*/
    function source3(source) {
      /* var source4 = source; */
      return source;
    }
    console.log(source3(source));

    return (
      <Host>
        {adressJS} <br />
        {streetnumberJS} <br />
        {source}
        <div id="map">
          <iframe width="700" height="440" src={source3(source)} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
        <br />
        <div id="map">
          <iframe
            width="700"
            height="440"
            src="https://maps.google.com/maps?width=1400&amp;height=440&amp;hl=en&amp;q=Waldried%20str.%2010+(Test)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
            /*/ So wäre es final top:
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
