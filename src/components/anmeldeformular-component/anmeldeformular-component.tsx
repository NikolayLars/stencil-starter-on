import { Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'anmeldeformular-component',
  styleUrl: 'anmeldeformular-component.css',
  shadow: true,
})
export class AnmeldeformularComponent {

  @Prop() titel :string;
  overlay: HTMLElement;
  modal: HTMLElement;
  checkbox1: HTMLElement;
  checkbox2: HTMLElement;
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  email: HTMLInputElement;
  notice: HTMLElement;

openAnmeldung(){
    this.modal.classList.add('active');
    this.overlay.classList.add('active');
}

checkInput(){
  if(this.firstName.value == '' || this.lastName.value == '' || this.email.value == ''){
    this.firstName.classList.add('empty');
    this.lastName.classList.add('empty');
    this.email.classList.add('empty');
    this.notice.innerHTML = "Bitte alle Pflichtfelder ausfüllen.";

  } else {
    this.firstName.classList.remove('empty');
    this.lastName.classList.remove('empty');
    this.email.classList.remove('empty');
    this.notice.innerHTML = '';
    this.closeAnmeldung();
  }
}

closeAnmeldung(){
    this.modal.classList.remove('active');
    this.overlay.classList.remove('active');
}

  render() {
    return (
      <Host>
        <button class="openButton" onClick={() => this.openAnmeldung()}>Hier anmelden</button>
        <div class="modal" id="modal" ref={(el) => this.modal = el as HTMLElement}>
              <div class="modal-header"> 
                {this.titel} 
              </div> 
              <div class="modal-body">
                <slot></slot>
              </div>
                  <div id="CheckList">
                    <table>
                      <tr>
                        <td><label class="inputContainer">Geschlecht</label></td>
                        <td><select name="gender" id="selectGender">
                        <option value="weiblich">weiblich</option>
                        <option value="männlich">männlich</option>
                        <option value="divers">divers</option>
                      </select></td>
                      </tr>
                      <tr>
                        <td><label htmlFor="firstName" class="inputContainer">Vorname*</label></td>
                        <td><input type="text" name="firstName" id="firstName" class="inputBox" ref={(el) => this.firstName = el as HTMLInputElement}/></td>
                      </tr>
                      <tr>
                        <td><label htmlFor="lastName" class="inputContainer">Nachname*</label></td>
                        <td><input type="text" name="lastName" id="lastName" class="inputBox" ref={(el) => this.lastName = el as HTMLInputElement}/></td>
                      </tr>
                      <tr>
                        <td><label htmlFor="telefon" class="inputContainer">Telefon</label></td>
                        <td><input type="tel" name="telefon" id="telefon" class="inputBox"/></td>
                      </tr>
                      <tr>
                        <td><label htmlFor="email" class="inputContainer">Mail-Adresse*</label></td>
                        <td><input type="email" name="email" id="email" class="inputBox" ref={(el) => this.email = el as HTMLInputElement}/></td>
                      </tr>
                      <tr>
                        <td class="checkboxTD"><input type="checkbox" ref={(el) => this.checkbox1 = el as HTMLElement}/></td>
                        <td class="checkboxTD"><label id="option2">Datenschutzrichtlinien*</label></td>
                      </tr>
                      <tr>
                        <td class="checkboxTD"><input type="checkbox" ref={(el) => this.checkbox2 = el as HTMLElement}/></td>
                        <td class="checkboxTD"><label id="option3">Ich möchte den Email-Newsletter abonnieren.</label></td>
                      </tr>
                    </table> 
                  </div>
                  <p class="notice" ref={(el) => this.notice = el as HTMLElement}></p>
                      <button class="closeButton" onClick={() => this.checkInput()}>Abschicken</button>
                      
                  <p id="unten">Alle Felder, die mit einem * gekennzeichnet sind, sind Pflichtfelder.</p>
            </div>
            <div class="overlay" id="overlay" ref={(el) => this.overlay = el as HTMLElement}></div>
      </Host>
    );
  }

}
