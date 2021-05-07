import { Component, h, Prop, Host, getAssetPath, State } from '@stencil/core';

@Component({
  tag: 'footer-component',
  styleUrl: 'footer-component.css',
  assetsDirs: ['assets'],
})
export class MorizComponent {
  //-------------------------------------------------------------------------------------------------------
  //Propperties
  //-------------------------------------------------------------------------------------------------------

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

  //-------------------------------------------------------------------------------------------------------
  //Function toTop
  //-------------------------------------------------------------------------------------------------------

  private toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  render() {
    return (
      <Host>
        {
          //-------------------------------------------------------------------------------------------------------
          //btn zum Seitenanfang
          //-------------------------------------------------------------------------------------------------------
        }
        <div id="footer">
          <div id="tableWrapper">
            <div class="tableRow">
              <button id="toTop" onClick={() => this.toTop()}>
                move to top
              </button>
            </div>
            {
              //-------------------------------------------------------------------------------------------------------
              //Social Media Icons
              //-------------------------------------------------------------------------------------------------------
            }
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
            {
              //-------------------------------------------------------------------------------------------------------
              //Variable Adresse
              //-------------------------------------------------------------------------------------------------------
            }
            <div class="tableRow">
              <div>
                <h2>Adresse:</h2>
                {this.street} <br />
                {this.city} <br />
                {this.plz}
              </div>
              {
                //-------------------------------------------------------------------------------------------------------
                //Variable Unternehmensseiten
                //-------------------------------------------------------------------------------------------------------
              }
              <div>
                <h2>Unternehmensseiten:</h2>
                <a id="sitelinks" href={this.urlone}>
                  {this.siteone}
                </a>{' '}
                <br />
                <a id="sitelinks" href={this.urltwo}>
                  {this.sitetwo}
                </a>{' '}
                <br />
                <a id="sitelinks" href={this.urlthree}>
                  {this.sitethree}
                </a>
              </div>
            </div>
            {
              //-------------------------------------------------------------------------------------------------------
              //Logos Zahlarten
              //-------------------------------------------------------------------------------------------------------
            }
            <div class="tableRow">
              <img class="logosPay" src={getAssetPath(`./assets/${this.imagePayPal}`)} alt="Logo PayPal" />
              <img class="logosPay" src={getAssetPath(`./assets/${this.imageVisa}`)} alt="Logo Visa" />
              <img class="logosPay" src={getAssetPath(`./assets/${this.imageMastercard}`)} alt="Logo MasterCard" />
            </div>
            <div class="tablerow"></div>
          </div>
        </div>
      </Host>
    );
  }
}
