document.querySelector('example-component').addEventListener('exampleEvent', () => console.log('test'));

function openSecond(x){
   x.parentNode.lastChild.style.width = "100vw";
}