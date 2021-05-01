import { Component, h, Prop, Host, getAssetPath, State } from '@stencil/core';

@Component({
  tag: 'moriz-component',
  styleUrl: 'moriz-component.css',
  assetsDirs: ['assets'],
})
export class MorizComponent {
  @Prop() street: string;
  @Prop() city: string;
  @Prop() plz: string;

  @Prop() socialMedia: any;

  @Prop() siteone: string;
  @Prop() urlone: string;

  @Prop() sitetwo: string;
  @Prop() urltwo: string;

  @Prop() sitethree: string;
  @Prop() urlthree: string;

  //images
  @Prop() imagePayPal = 'clipart4300803.png';
  @Prop() imageFacebook = 'Facebook.png';
  @Prop() imageInstagram = 'Insta.png';
  @Prop() imageLinkedIn = 'LinkedIn.png';
  @Prop() imageVisa = 'PikPng.com_visa-png_810129.png';
  @Prop() imageMastercard = 'pngfind.com-master-card-logo-png-2088342.png';
  @Prop() imageTwitter = 'Twitter.png';
  @Prop() imageWhatsapp = 'whatsapp.png';
  @Prop() imageXing = 'Xing.png';
  @Prop() imageYouTube = 'YouTube.png';

  // ------------------

  @Prop() sites: string;

  @State() sitesObj: string[] = [];

  //----------------------
  private toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  render() {
    return (
      <Host>
        <div id="footer">
          <div id="tableWrapper">
            <div class="tableRow">
            <button id="toTop" onClick={() => this.toTop()}>
                  move to top
                </button>
            </div>
            <div class="tableRow">
            <h1>Stay in touch with us</h1>
            </div>
            <div class="tableRow">
                <img class="logosSM" src={getAssetPath(`./assets/${this.imageFacebook}`)} alt="Logo Facebook" />

                <img class="logosSM" src={getAssetPath(`./assets/${this.imageInstagram}`)} alt="Logo Instagram" />

                <img class="logosSM" src={getAssetPath(`./assets/${this.imageTwitter}`)} alt="Logo Twitter" />
                <img class="logosSM" src={getAssetPath(`./assets/${this.imageLinkedIn}`)} alt="Logo LinedIn" />
                
                <img class="logosSM" src={getAssetPath(`./assets/${this.imageXing}`)} alt="Logo Xing" />
                
                
                <img class="logosSM" src={getAssetPath(`./assets/${this.imageYouTube}`)} alt="Logo YouTube" />
                
                
                <img class="logosSM" src={getAssetPath(`./assets/${this.imageWhatsapp}`)} alt="Logo Whatsapp" />
              </div>
              <div class="tableRow">
                <div>
                <h2>Adresse:</h2>
                {this.street} <br />
                {this.city} <br />
                {this.plz}
                </div>
                <div>
                <h2>Unternehmensseiten:</h2>
                {/*document.write("<a href='" + { this: this.urltwo } + "'>" + { this: this.siteone } + ' </a>')*/}
                {this.siteone} <br />
                {this.urltwo} <br />
                {this.sitetwo} <br />
                {this.urltwo} <br />
                {this.sitethree} <br />
                {this.urlthree}
                </div>
              </div>
              <div class="tableRow">
                <img class="logosPay" src={getAssetPath(`./assets/${this.imagePayPal}`)} alt="Logo PayPal" />
                  <img class="logosPay" src={getAssetPath(`./assets/${this.imageVisa}`)} alt="Logo Visa" />
                  <img class="logosPay" src={getAssetPath(`./assets/${this.imageMastercard}`)} alt="Logo MasterCard" />
              </div>
              <div class="tablerow">
              </div>
          </div>
        </div>
      </Host>
    );
  }
}
