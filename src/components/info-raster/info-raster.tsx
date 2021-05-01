import { Component, Host, h, Prop, getAssetPath} from '@stencil/core';

@Component({
  tag: 'info-raster',
  styleUrl: 'info-raster.css',
 
})



export class InfoRaster {
  @Prop() infotitlerechts: string;
  @Prop() infotitlelinks: string;
  @Prop() infdescriptionlinks: string;
  @Prop() infdescriptionrechts: string;

  @Prop() imginforechts = '0x0-Model3_22.jpg';
  @Prop() imginfolinks = '0x0-Model3_17.jpg';

  render() {
    return (
      <Host>
        <slot>
        <div id="info-raster-rechts"> 
        <img id="info-img-rechts" src={getAssetPath(`./assets/${this.imginforechts}`)} alt=""/>
          <h1 id="infotitlerechts">{this.infotitlerechts}</h1> <br/>
            <p id="infotextrechts">{this.infdescriptionrechts}</p>
                </div>

                <div id="info-raster-links">
                <img id="info-img-links" src={getAssetPath(`./assets/${this.imginfolinks}`)} alt=""/>
                <h1 id="infotitlelinks">{this.infotitlelinks}</h1>
                <p id="infotextlinks">{this.infdescriptionlinks}</p>
                </div>
        </slot>
      </Host>
    );
  }

}
