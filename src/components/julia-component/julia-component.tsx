import { Component, Host, h, Prop,} from '@stencil/core';

@Component({
  tag: 'julia-component',
  styleUrl: 'julia-component.css',
  shadow: true,
})

export class JuliaComponent {

  @Prop() kopfzeile :string;
  overlay!: HTMLElement;
  modal!: HTMLElement;

  timer = setTimeout(() => {
    console.log("Timer läuft");
    this.openPopup();
}, 2000);  

openPopup(){
  console.log("opened");
    this.modal.classList.add('active');
    this.overlay.classList.add('active');
}

closePopup(): void{
  console.log("closed");
    this.modal.classList.remove('active');
    this.overlay.classList.remove('active');
}

  render() {
    return (
        
        <Host>
          <div class="modal" id="modal" ref={(el) => this.modal = el as HTMLElement}>
              <div class="modal-header">
                {this.kopfzeile}
              </div>
              <div class="modal-body">
                <slot></slot>
              </div>
                  <div id="CheckList">
                    
                    <label class="container" id="option1">
                    <input class="checkbox" type="checkbox" defaultChecked/>Notwendig
                    </label>

                    <label class="container" id="option2">
                    <input class="checkbox" type="checkbox" checked/>Statistik
                    </label>

                    <label class="container" id="option3">
                    <input class="checkbox" type="checkbox" checked/>Personalisierung
                    </label>
                    
                  </div>
                  <div id="buttonDiv">
                      <button id="acceptCookies" class="main-button" onClick={this.closePopup}>Accept</button>
                      <button id="moreCookieoptions" onClick={this.closePopup}>Choose Options</button>
                  </div>
            </div>
            <div class="overlay" id="overlay" ref={(el) => this.overlay = el as HTMLElement}></div>
        </Host>
    );
  }
}