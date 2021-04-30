import { Component, Host, h, Prop,getAssetPath} from '@stencil/core';

@Component({
  tag: 'melly-component',
  styleUrl: 'melly-component.css',
  })

export class MellyComponent {
  
  @Prop() img1 = '0x0-Model3_10.jpg';
  @Prop() img2 = '0x0-Model3_12.jpg';
  @Prop() img3 = '0x0-Model3_13.jpg';
  @Prop() img4 = '0x0-Model3_19.jpg';
  @Prop() img5 = '0x0-Model3_20.jpg';

  

  rechtsBtn(){
  const carouselSlide:Element|any = document.querySelector(".carousel-slide")
  const size = 1600;
  let counter = 0;
      if(counter >= 4){
          console.log("IF plpplpllllllllllllllllllllllllllllllllll GEHTTTT")
          counter = 0;
          carouselSlide.style.transition = "transform 0.4s ease-in-out";
          carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  
      } else{
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      counter++;
      console.log(counter)
      carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  }} ;

  linksBtn(){
  const carouselSlide:Element|any = document.querySelector(".carousel-slide")
  const size = 1600;
  let counter = 0;
      if(counter <= 0){
          console.log("IF 1 GEHTTTT")
         counter=  5;
          carouselSlide.style.transform= "translateX(" + (-size * counter) + "px)";
  
      }{
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      counter--;
      console.log(counter)
      carouselSlide.style.transform= "translateX(" + (-size * counter) + "px)";
  }};

  render() {

    return (

      <Host>
        <div id="slider">
                <button id="prevBtn" onClick={this.linksBtn}>{"<"}</button>
                <button id="nextBtn" onClick={this.rechtsBtn}>{">"}</button> 
                
                <div class="carousel-container">
        
                  <div class="carousel-slide">
               
                    
                    <img src={getAssetPath(`./assets/${this.img2}`)} alt=""/>
                    <img src={getAssetPath(`./assets/${this.img3}`)} alt=""/>
                    <img src={getAssetPath(`./assets/${this.img4}`)} alt=""/>
                    <img src={getAssetPath(`./assets/${this.img5}`)} alt=""/>
                 </div>
            
                </div>
          </div>
      </Host>
    );
  }
}

