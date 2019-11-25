var dugme= document.querySelector('#dugme');
var opis = document.querySelector('#opis');
var select = document.querySelector('#select');
var iznos = document.querySelector('#iznos');
var prihodContainer = document.querySelector('#prihodiLista');
var rashodiContainer = document.querySelector('#rashodiLista');
var ulPrihodi = document.querySelector('#listaP')
var ulRashodi = document.querySelector('#listaR')

dugme.addEventListener('click', function() {
  
var liContent = document.createTextNode(opis.value);
//var liNumber = document.createTextNode(iznos.value);
if(select.value=='prihod'){
    let newLi = document.createElement('li');

    newLi.appendChild(liContent);
    //liNumber.appendChild(liContent);
    prihodContainer.appendChild(newLi);
   // prihodContainer.appendChild(liNumber);
}else{
    let newLi = document.createElement('li');
    newLi.appendChild(liContent);
   // liNumber.appendChild(liContent);
    rashodiContainer.appendChild(newLi);
   // rashodiContainer.appendChild(liNumber);
};
});