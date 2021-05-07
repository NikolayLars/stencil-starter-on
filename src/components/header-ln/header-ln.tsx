import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'header-ln',
  styleUrl: 'header-ln.css',
})




export class HeaderLn {
  closeAll() {
    document.querySelector<HTMLElement>(".ebn1").style.height = "0";
    document.querySelector<HTMLElement>(".ebn2").style.width = "0";
  }
  openfirst(){
  document.querySelector<HTMLElement>(".ebn1").style.height = "100vh";
}



  render() {
   
      //Platzhalter Könnte über eine Abfrage von einem Websocket erfragt werden
      let sites :Array<Array<Array<string>>>=[[["Seite1","Seite1.html"]],[["Seite2","Seite2.html"]],[["Seite3"],["Unterseite1","Unterseite1.html"]]];
      
      
     
    let ebn1 :string;
    ebn1 = "";
    let ebn2 :string;
    ebn2 = "";
    let ebn1link :string;
    
      for(let i=0;i<sites.length;i++){
        ebn1 +="<div class='ebn1item'>";
        if(sites[i].length===1){
          ebn1link = `href='${sites[i][0][1]}'`;
        } else {
          ebn1link = `onclick='openSecond(this)'`;
        }
        ebn1+=`<a ${ebn1link}>${sites[i][0][0]}</a>`;
        ebn1link = "";
        if (sites[i].length>1){
          ebn2 += "<div class = 'ebn2'>"
          for(let b=1;b<sites[i].length;b++){
            
            ebn2 += `<div class="item2"><a href="${sites[i][b][1]}">${sites[i][b][0]}</a></div>`;
            
    
        }
        ebn2 += "</div>"
        ebn1 +=ebn2;
      }
      ebn1 +="</div>";
    }
    
    
    
    return (
      
      <Host>
        <slot><div class="ebn1"  innerHTML={ebn1}><div class="exit" onClick={this.closeAll}>X</div></div>
        <div class="burger" onClick={this.openfirst}>
    <span class="sp1"></span>
    <span class="sp2"></span>
    <span class="sp3"></span>
</div></slot>
      </Host>
    );
  }

}


