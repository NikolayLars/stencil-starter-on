import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'information-icon',
  styleUrl: 'information-icon.css',
})
export class informationIconComponent {

  @Prop() textblockInhalt :string;

  render() {

    function showTextblock (event) {
      document.getElementById("textblock").style.height = "auto";
      document.getElementById("textblock").style.left = event.target.getBoundingClientRect().x + 40 + "px";
    }

    function hideTextblock () {
      document.getElementById("textblock").style.height = "0";
    }

    return (
      <Host>
        <slot>
        <div class="position">
        <img src="../src/components/moriz-component/assets/TeslaLadesation.jpeg"></img>
          <div id="infoIcon" onMouseEnter = {showTextblock} onMouseLeave = {hideTextblock}>
          
          <div id="textblock">
          <p>Das ist der Motor.</p>
          </div>
          </div>
        </div>
        </slot>
      </Host>
    );
  }

}
