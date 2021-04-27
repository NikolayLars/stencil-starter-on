import { Component, Host, h, Prop,} from '@stencil/core';

@Component({
  tag: 'julia-component',
  styleUrl: 'julia-component.css',
  shadow: true,
})

export class JuliaComponent {

  @Prop() titel :string;
  overlay: HTMLElement;
  modal: HTMLElement;
  checkbox2: HTMLElement;
  checkbox3: HTMLElement;

  timer = setTimeout(() => {
    console.log("Timer läuft");
    this.openPopup();
}, 2000);  

openPopup(){
  console.log("opened");
    this.modal.classList.add('active');
    this.overlay.classList.add('active');
}

closePopup(){
  console.log("closed");
    this.modal.classList.remove('active');
    this.overlay.classList.remove('active');
}

checkAllBoxes(){
  this.checkbox2.setAttribute("checked", "true");
  this.checkbox3.setAttribute("checked", "true");
  this.closePopup();
}

  render() {
    return (
        
        <Host>
          <div class="modal" id="modal" ref={(el) => this.modal = el as HTMLElement}>
              <div class="modal-header">
                {this.titel}
              </div>
              <div class="modal-body">
                <slot></slot>
              </div>
                  <div id="CheckList">
                    
                    <label class="container" id="option1">
                    <input class="checkbox" type="checkbox" disabled checked/>Notwendig
                    </label>

                    <label class="container" id="option2">
                    <input class="checkbox" type="checkbox" ref={(el) => this.checkbox2 = el as HTMLElement}/>Statistik
                    </label>

                    <label class="container" id="option3">
                    <input class="checkbox" type="checkbox" ref={(el) => this.checkbox3 = el as HTMLElement}/>Personalisierung
                    </label>
                    
                  </div>
                  <div id="buttonDiv">
                      <button id="acceptCookies" class="main-button" onClick={() => this.checkAllBoxes()}>Alle auswählen</button>
                      <button id="moreCookieoptions" onClick={() => this.closePopup()}>Auswahl bestätigen</button>
                  </div>
            </div>
            <div class="overlay" id="overlay" ref={(el) => this.overlay = el as HTMLElement}></div>
        </Host>
    );
  }
}