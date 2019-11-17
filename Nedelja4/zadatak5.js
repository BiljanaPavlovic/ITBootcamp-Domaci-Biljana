/*5. Направити функцију која рачуна укупну цену рецепта
 (функција је везана за објекат (this)) (За сваки састојак из 
рецепта одредити цену,па сабрати то (цена у самом објекту је 
 написана за Количину 1, па укупну цену за један састојак рачунамо 
са количина*цена))

    ```
    recept = {
        ...
    }

    recept.cena = function(){
        ...
    }
    ```*/

    let recept={
        name:'makaroneSaSirom',
        tezina:'srednje',
        sastojci:[
            {
               imeSastojka: 'makarone',
               kolicina: 1,
               cena: 60
           },
       
            {
           imeSastojka: 'sir',
           kolicina: 1,
           cena: 200
           },

       
           {
               imeSastojka: 'jaja',
               kolicina: 3,
               cena: 10

           },
           {
               imeSastojka: 'ulje',
               kolicina: 1,
               cena: 5},
       
               {
                   imeSastojka: 'so',
                   kolicina:1,
                   cena:5
               }
        ]
        
    }

function cenaMakarone(recept){
    return recept.sastojci[0].cena*recept.sastojci[0].kolicina;
}

let cenaMakaroneSum= cenaMakarone(recept);
console.log(cenaMakaroneSum);

function cenaSir(recept){
    return recept.sastojci[1].cena*recept.sastojci[1].kolicina;
}

let cenaSirSum= cenaSir(recept);
console.log(cenaSirSum);

function cenaJaja(recept){
    return recept.sastojci[2].cena*recept.sastojci[2].kolicina;
}

let cenaJajaSum= cenaJaja(recept);
console.log(cenaJajaSum);

function cenaUlje(recept){
    return recept.sastojci[3].cena*recept.sastojci[3].kolicina;
}

let cenaUljeSum= cenaUlje(recept);
console.log(cenaUljeSum);

function cenaSo(recept){
    return recept.sastojci[4].cena*recept.sastojci[4].kolicina;
}

let cenaSoSum= cenaSo(recept);
console.log(cenaSoSum);

function cenaJela(){
    let ukupnaCena= cenaMakaroneSum+cenaSirSum+cenaJajaSum+cenaUljeSum+cenaSoSum;
    return ukupnaCena;
}

console.log(cenaJela());


