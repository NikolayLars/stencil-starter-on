import { Component, /*Host,*/ h, Prop, Method } from '@stencil/core';

@Component({
  tag: 'moriz-component',
  styleUrl: 'moriz-component.css',
  shadow: true,
})
export class MorizComponent {

  @ Prop() street: String;
  @ Prop() city: String;
  @ Prop() plz: String;
  @Prop() Unternehmensseiten:String[];

  @ Prop() socialMedia: any

  @Method() 
  darkmode (){

  }



  render() {
  return(
    <div class="container-fluid" id="footer">
       <div class="row">
         <h1>
           Stay in touch with us
         </h1>
         <p>
         <ul id="#SocialMedia">
      <li><p><img class="logosSM" src="../../../Bilder/Facebook.png" alt="Logo Facebook"/></p></li>
      <li><p><img class="logosSM" src="../../../Bilder/Insta.png" alt="Logo Instagram"/></p></li>
      <li><p><img class="logosSM" src="../../../Bilder/LinkedIn.png" alt="Logo LinedIn"/></p></li>
      <li><p><img class="logosSM" src="../../../Bilder/Twitter.png" alt="Logo Twitter"/></p></li>
      <li><p><img class="logosSM" src="../../../Bilder/Xing.png" alt="Logo Xing"/></p></li>
      <li><p><img class="logosSM" src="../../../Bilder/YouTube.png" alt="Logo YouTube"/></p></li>
      <li><p><img class="logosSM" src="../../../Bilder/whatsapp.png" alt="Logo Whatsapp"/></p></li>
      </ul>
         </p>
       </div>
      <div class="col-6">
      <h2>
        Adresse:
      </h2>
      <p>
        {this.street}
        {this.city}
        {this.plz}
      </p>
      </div>
      <div class="col-6">
      <h2>
        Unternehmensseiten:
      </h2>
      <p>
      {()=>{
            for(var i = 0; i < this.Unternehmensseiten.length ; i++){
            {this.Unternehmensseiten[i]}
          };}}
      </p>
      </div>
      <div class="row">
          <ul>
      <li><p><img class="logosPay" src="../../../Bilder/clipart4300803.png" alt="Logo PayPal"/></p></li>
      <li><p><img class="logosPay" src="../../../Bilder/PikPng.com_visa-png_810129.png" alt="Logo Visa"/></p></li>
      <li><p><img class="logosPay" src="../../../Bilder/pngfind.com-master-card-logo-png-2088342.png" alt="Logo MasterCard"/></p></li>
      </ul>
      </div>
      </div>
  );
  }

}
