import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'anmeldeformular-component',
  styleUrl: 'anmeldeformular-component.css',
  shadow: true,
})
export class AnmeldeformularComponent {

  @Prop() titel :string;
  overlay: HTMLElement;
  modal: HTMLElement;
  checkbox2: HTMLElement;
  checkbox3: HTMLElement;

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

checkInput(){
  this.closePopup();
}
/*
const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
*/
  render() {
    return (
      <Host>
        <button id="anmeldeButton" onClick={() => this.openPopup()}>Hier anmelden</button>
        <div class="modal" id="modal" ref={(el) => this.modal = el as HTMLElement}>
              <div class="modal-header">
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
                        <td><input type="text" name="firstName" id="firstName" class="inputBox"/></td>
                      </tr>
                      <tr>
                        <td><label htmlFor="lastName" class="inputContainer">Nachname*</label></td>
                        <td><input type="text" name="lastName" id="lastName" class="inputBox"/></td>
                      </tr>
                      <tr>
                        <td><label htmlFor="telefon" class="inputContainer">Telefon*</label></td>
                        <td><input type="tel" name="telefon" id="telefon" class="inputBox"/></td>
                      </tr>
                      <tr>
                        <td><label htmlFor="email" class="inputContainer">Mail-Adresse*</label></td>
                        <td><input type="email" name="email" id="email" class="inputBox"/></td>
                      </tr>
                      <tr>
                        <td class="checkboxTD"><input type="checkbox" ref={(el) => this.checkbox2 = el as HTMLElement}/></td>
                        <td class="checkboxTD"><label id="option2">Datenschutzrichtlinien</label></td>
                      </tr>
                      <tr>
                        <td class="checkboxTD"><input type="checkbox" ref={(el) => this.checkbox3 = el as HTMLElement}/></td>
                        <td class="checkboxTD"><label id="option3">Ich möchte den Email-Newsletter abonnieren.</label></td>
                      </tr>
                    </table> 
                  </div>
                  <div id="buttonDiv">
                      <button id="acceptCookies" class="main-button" onClick={() => this.checkInput()}>Abschicken</button>
                  </div>
                  <div class="unten">
                  <p>Alle Felder, die mit einem * gekennzeichnet sind, sind Pflichtfelder.</p>
                  </div>
            </div>
            <div class="overlay" id="overlay" ref={(el) => this.overlay = el as HTMLElement}></div>
      </Host>
    );
  }

}
