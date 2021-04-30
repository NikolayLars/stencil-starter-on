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

  @Prop() site1: string;
  @Prop() url1: string;

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
          <div class="col-12">
            <p>
              <button id="toTop" onClick={() => this.toTop()}>
                move to top
              </button>
            </p>
          </div>
          <div class="col-12">
            <h1>Stay in touch with us</h1>
          </div>
          <div class="col-12">
            <ul id="#SocialMedia">
              <li>
                <img class="logosSM" src={getAssetPath(`./assets/${this.imageFacebook}`)} alt="Logo Facebook" />
              </li>
              <li>
                <p>
                  <img class="logosSM" src={getAssetPath(`./assets/${this.imageInstagram}`)} alt="Logo Instagram" />
                </p>
              </li>
              <li>
                <img class="logosSM" src={getAssetPath(`./assets/${this.imageLinkedIn}`)} alt="Logo LinedIn" />
              </li>
              <li>
                <img class="logosSM" src={getAssetPath(`./assets/${this.imageTwitter}`)} alt="Logo Twitter" />
              </li>
              <li>
                <img class="logosSM" src={getAssetPath(`./assets/${this.imageXing}`)} alt="Logo Xing" />
              </li>
              <li>
                <img class="logosSM" src={getAssetPath(`./assets/${this.imageYouTube}`)} alt="Logo YouTube" />
              </li>
              <li>
                <img class="logosSM" src={getAssetPath(`./assets/${this.imageWhatsapp}`)} alt="Logo Whatsapp" />
              </li>
            </ul>
          </div>
          <div class="row">
            <div class="col-6">
              <br />
              <h2>Adresse:</h2>
              {this.street} <br />
              {this.city} <br />
              {this.plz}
            </div>
            <div class="col-6">
              <h2>Unternehmensseiten:</h2>
              <a href="">{this.site1}</a>
              {this.site1} test
            </div>
          </div>
          <div class="row">
            <ul>
              <li>
                <img class="logosPay" src={getAssetPath(`./assets/${this.imagePayPal}`)} alt="Logo PayPal" />
              </li>
              <li>
                <img class="logosPay" src={getAssetPath(`./assets/${this.imageVisa}`)} alt="Logo Visa" />
              </li>
              <li>
                <img class="logosPay" src={getAssetPath(`./assets/${this.imageMastercard}`)} alt="Logo MasterCard" />
              </li>
            </ul>
          </div>
        </div>
      </Host>
    );
  }
}
