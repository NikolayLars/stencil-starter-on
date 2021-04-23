import { Component, h, Prop, Method, Host, getAssetPath } from '@stencil/core';

@Component({
  tag: 'moriz-component',
  styleUrl: 'moriz-component.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class MorizComponent {
  @Prop({ reflect: true }) street: String;
  @Prop() city: String;
  @Prop() plz: String;
  @Prop() Unternehmensseiten: String[];

  @Prop() socialMedia: any;

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

  //@Method()
  //darkmode() {}

  render() {
    return (
      <Host>
        <div class="container-fluid" id="footer">
          <div class="row">
            <h1>Stay in touch with us</h1>
            <p>
              <ul id="#SocialMedia">
                <li>
                  <p>
                    <img class="logosSM" src={getAssetPath(`./assets/${this.imageFacebook}`)} alt="Logo Facebook" />
                  </p>
                </li>
                <li>
                  <p>
                    <img class="logosSM" src={getAssetPath(`./assets/${this.imageInstagram}`)} alt="Logo Instagram" />
                  </p>
                </li>
                <li>
                  <p>
                    <img class="logosSM" src={getAssetPath(`./assets/${this.imageLinkedIn}`)} alt="Logo LinedIn" />
                  </p>
                </li>
                <li>
                  <p>
                    <img class="logosSM" src={getAssetPath(`./assets/${this.imageTwitter}`)} alt="Logo Twitter" />
                  </p>
                </li>
                <li>
                  <p>
                    <img class="logosSM" src={getAssetPath(`./assets/${this.imageXing}`)} alt="Logo Xing" />
                  </p>
                </li>
                <li>
                  <p>
                    <img class="logosSM" src={getAssetPath(`./assets/${this.imageYouTube}`)} alt="Logo YouTube" />
                  </p>
                </li>
                <li>
                  <p>
                    <img class="logosSM" src={getAssetPath(`./assets/${this.imageWhatsapp}`)} alt="Logo Whatsapp" />
                  </p>
                </li>
              </ul>
            </p>
          </div>
          <div class="col-6">
            <h2>Adresse:</h2>
            <p>
              {this.street}
              {this.city}
              {this.plz}
            </p>
          </div>
          <div class="col-6">
            <h2>Unternehmensseiten:</h2>
            <p>
              {() => {
                for (var i = 0; i < this.Unternehmensseiten.length; i++) {
                  {
                    this.Unternehmensseiten[i];
                  }
                }
              }}
            </p>
          </div>
          <div class="row">
            <ul>
              <li>
                <p>
                  <img class="logosPay" src={getAssetPath(`./assets/${this.imagePayPal}`)} alt="Logo PayPal" />
                </p>
              </li>
              <li>
                <p>
                  <img class="logosPay" src={getAssetPath(`./assets/${this.imageVisa}`)} alt="Logo Visa" />
                </p>
              </li>
              <li>
                <p>
                  <img class="logosPay" src={getAssetPath(`./assets/${this.imageMastercard}`)} alt="Logo MasterCard" />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Host>
    );
  }
}
/*
@Prop({reflect: true}) sites: string;

@State() sitesObj: string[] = [];

@Watch('sites')
handleChange() {
this.parseSites();
}

parseSites() {
if (this.sites) {
this.sitesObj = JSON.parse(this.sites);
}
}

componentWillRender() {
this.parseSites();
}
*/
