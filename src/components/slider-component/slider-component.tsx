import { Component, Host, h, Prop,getAssetPath} from '@stencil/core';

@Component({
  tag: 'slider-component',
  styleUrl: 'slider-component.css',

  })

export class SliderComponent {
  
  @Prop() img1 = '0x0-Model3_10.jpg';
  @Prop() img2 = '0x0-Model3_12.jpg';
  @Prop() img3 = '0x0-Model3_13.jpg';
  @Prop() img4 = '0x0-Model3_19.jpg';
  @Prop() img5 = '0x0-Model3_20.jpg';

 
  

  render() {
let counter =0;
function rechtsBtn(){
  const carouselSlide:Element|any = document.querySelector(".carousel-slide")
  const size = 1600;
  console.log(counter)
      if(counter >= 4){
          counter = 0;
          carouselSlide.style.transition = "transform 0.4s ease-in-out";
          carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  
      } else{
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      ++counter;
      console.log(counter)
      carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  }} ;

 function linksBtn(){
  const carouselSlide:Element|any = document.querySelector(".carousel-slide")
  const size = 1600;
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
    return (
      <Host>
        
        <div id="slider">
                <button id="prevBtn" onClick={linksBtn}>{"<"}</button>
                <button id="nextBtn" onClick={rechtsBtn}>{">"}</button> 
                
                <div class="carousel-container">
        
                  <div class="carousel-slide">
               
                    <img id="img" src={getAssetPath(`./assets/${this.img1}`)} alt=""/>
                    <img id="img" src={getAssetPath(`./assets/${this.img2}`)} alt=""/>
                    <img id="img" src={getAssetPath(`./assets/${this.img3}`)} alt=""/>
                    <img id="img" src={getAssetPath(`./assets/${this.img4}`)} alt=""/>
                    <img id="img" src={getAssetPath(`./assets/${this.img5}`)} alt=""/>
                 </div>
            
                </div>
          </div>
      </Host>
    );
  }
}

