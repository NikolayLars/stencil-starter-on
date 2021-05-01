import { Component, Host, h, Prop, getAssetPath } from '@stencil/core';

@Component({
  tag: 'flip-card',
  styleUrl: 'flip-card.css',
  assetsDirs: ['assets'],
})
export class FlipCard {
  @Prop() Picture1 = 'picture1.jpg';
  @Prop() Picture2 = '0x0-Model3_19.jpg';
  @Prop() Picture3 = 'picture3.jpg';
  @Prop() plz: string;
  @Prop() carnameone: string;
  @Prop() carnametwo: string;
  @Prop() carnamethree: string;
  @Prop() cardescriptionone: string;
  @Prop() cardescriptiontwo: string;
  @Prop() cardescriptionthree: string;

  render() {
    return (
      <Host>
        
          <div id="flip-component">
          <li>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img id="teslaPicture" src={getAssetPath(`./assets/${this.Picture1}`)} />
                </div>
                <div class="flip-card-back">
                  <h1>{this.carnameone}</h1>
                  <p>{this.cardescriptionone}</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img id="teslaPicture" src={getAssetPath(`./assets/${this.Picture2}`)} />
                </div>
                <div class="flip-card-back">
                  <h1>{this.carnametwo}</h1>
                  <p>{this.cardescriptiontwo}</p>
                  <p>{this.plz}</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img id="teslaPicture" src={getAssetPath(`./assets/${this.Picture3}`)} />
                </div>
                <div class="flip-card-back">
                  <h1>{this.carnamethree}</h1>
                  <p>{this.cardescriptionthree}</p>
                </div>
              </div>
            </div>
          </li>
          </div>
        
      </Host>
    );
  }
}
