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


let s1 = {
    imeSastojka: 'makarone',
    kolicina: 1,
    cena: 60
};
let s2 = {
    imeSastojka: 'sir',
    kolicina: 1,
    cena: 200
};
let s3 =
{
    imeSastojka: 'jaja',
    kolicina: 3,
    cena: 10

}
let s4 =
{
    imeSastojka: 'ulje',
    kolicina: 1,
    cena: 5
};
let s5 =
{
    imeSastojka: 'so',
    kolicina: 1,
    cena: 5
}
let recept = {
    name: 'makaroneSaSirom',
    tezina: 'srednje',
    sastojci: [s1, s2, s3, s4, s5],

    ukupnaCena: function() {
        let ukupno = 0;
        this.sastojci.forEach(s => {
            ukupno += s.kolicina * s.cena;
        });
        return ukupno;
    }
}

console.log(recept.ukupnaCena());


