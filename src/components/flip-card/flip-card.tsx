import { Component, Host, h, Prop, getAssetPath } from '@stencil/core';

@Component({
  tag: 'flip-card',
  styleUrl: 'flip-card.css',
  assetsDirs: ['assets'],
})
export class FlipCard {
  @Prop() Picture1 = 'picture1.jpg';
  @Prop() Picture2 = 'picture2.jpg';
  @Prop() Picture3 = 'picture3.jpg';

  @Prop() CarName1: string;
  @Prop() CarName2: string;
  @Prop() CarName3: string;

  @Prop() CarDescription1: string;
  @Prop() CarDescription2: string;
  @Prop() CarDescription3: string;

  render() {
    return (
      <Host>
        <ul>
          <li>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img id="teslaPicture" src={getAssetPath(`./assets/${this.Picture1}`)} />
                </div>
                <div class="flip-card-back">
                  <h1>{this.CarName1}</h1>
                  <p>{this.CarDescription1}</p>
                  <p>teslaPicture</p>
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
                  <h1>{this.CarName2}</h1>
                  <p>{this.CarDescription2}</p>
                  <p>teslaPicture</p>
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
                  <h1>{this.CarName3}</h1>
                  <p>{this.CarDescription3}</p>
                  <p>teslaPicture</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </Host>
    );
  }
}
