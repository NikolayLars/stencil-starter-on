import { Component, Host, h, getAssetPath, Prop } from '@stencil/core';

@Component({
  tag: 'header-component',
  styleUrl: 'header-component.css',
  shadow: true,
})
export class HeaderComponent {
  @Prop() teslaLogo = 'Tesla_logo.png';

  @Prop() home: string;
  @Prop() contact: string;
  @Prop() shop: string;

  @Prop() homeurl: string;
  @Prop() contacturl: string;
  @Prop() shopurl: string;
  render() {
    return (
      <Host>
        <div id="header">
          <img class="logoTesla" src={getAssetPath(`./assets/${this.teslaLogo}`)} alt="Logo Tesla" />
          <table>
            <tr>
              <td>
                <a class="sitelinks" href={this.homeurl}>
                  {this.home}
                </a>
              </td>
              <td>
                <a class="sitelinks" href={this.contacturl}>
                  {this.contact}
                </a>
              </td>
              <td>
                <a class="sitelinks" href={this.shopurl}>
                  {this.shop}
                </a>
              </td>
            </tr>
          </table>
        </div>
      </Host>
    );
  }
}
