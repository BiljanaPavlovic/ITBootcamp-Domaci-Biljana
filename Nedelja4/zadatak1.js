/*1. Направити објекат рецепт који садржи следеће информације: (Направите макар 4 различита рецепта)
    * Име рецепта
    * Тежина рецепта (Почетни,Лак,Средњи,Тежак,Мајстор)
    * Састојци (низ састојака потребних за рецепт)

    Даље, направити програм који исписује све ове вредности у следећем облику:
     (најбоље направити функцију која ради ово,због следећег задатка)
    
    ```
    Шпагете у белом сосу:
    Тежина: Средњи
    Састојци: Шпагете,Павлака за кување,Бели лук,Ћуреће месо,Маслац,Јаја,Бибер,Со
    ```*/


class Recepti{
    constructor(name,tezina,sastojci){
        this.name=name;
        this.tezina=tezina;
        this.sastojci=sastojci;
    }
 print(){
       return `${this.name}:${this.tezina},${this.sastojci}`;
       
    }
}

let recept1=new Recepti('tortaSaJagodama','lako',['piskote', 'pavlaka', 'jagode', 'slag']);

let recept2=new Recepti('palacinke','lako',['brasno','jaja','ulje','secer', 'so', 'prasakZaPecivo']);

let recept3=new Recepti('punjeneTikvice','tesko',['tikvice','mleveno meso','pirinac', 'luk','ulje']);

let recept4=new Recepti('makaroneSaSirom','srednje',['makarone','sir','jaja','mleko']);

let recept5=new Recepti('plodoviMoraUTortilji','srednje',['tortilje','plodoviMora','meksickaMesavina'])

console.log(recept1.print());
console.log(recept2.print());
console.log(recept3.print());
console.log(recept4.print());
console.log(recept5.print());

//console.log(Recepti.print());

