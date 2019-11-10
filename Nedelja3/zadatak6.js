/*На страници постоје 2 дугмета за наручивање 
(као на страници пицерије, ORDER)
И постоје 2 дугмета за наручивање одмах 

1. Дугмићи за наручивање повећавају бројач
2. Дугмићи за наручивање одмах ресетују бројач на нула и
 исписују додатну поруку (Порука у облику: Наручили сте [X] пица,
     [ danasnji datum i vreme ])
Напомена:  X је бројач, проверити да ли је бројач 0, и ако јесте 
кликом на наручивање одмах избацује одговарајућу поруку за грешку*/

const btnOrderClassName='btn-order';

let btnOrder=document.getElementsByClassName(btnOrderClassName);
console.log(btnOrder);
let counter=document.getElementById('counter');
counter=0;

const orderCounterBadge=document.getElementById('counter');
function order(counter){

counter++;
orderCounterBadge.innerHTML=counter;
}
console.log(counter);
const counterNumber=document.getElementById('counter');

for(let button of btnOrder){
    button.addEventListener('click',function(){
        order(counter)
    });
}
function izaberi(element){
    console.log(element);
    brojac++;
    CountQueuingStrategy.innerHTML=brojac;
}
const orderNowClassName='btn-order-now';
let orderNow=document.getElementsByClassName(orderNowClassName);
console.log(orderNow);
for(let dugme of orderNow){
    dugme.addEventListener('click', function(){
        naruciOdmah(brojac);
    });
}

function naruciOdmah(reset){
    console.log(reset);
    if (brojac<=0)
    window.alert('GRESKA!');
}
