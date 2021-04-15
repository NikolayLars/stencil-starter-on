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

  @ Prop() socialMedia: any

  @Method() 
  darkmode (){

  }



  render() {
  return(
  //<Host>
    <div class="container-fluid">
      <h2>
        Adresse:
      </h2>
      <p>
        {this.street}
        {this.city}
        {this.plz}
      </p>
    </div>
    //</Host>
  );
  }

}
