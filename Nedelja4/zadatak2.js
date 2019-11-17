/*2. Направити функцију која прима низ горе направљених објеката и
 исписује оне рецепте који су Почетни или Лаки (не исписује остале)

    ```
    <ime-recepta>
    Тежина: <Лаки || Почетни>
    Састојци: [<...>,...]
    ```*/

let recepti=[{
   name: 'tortaSaJagodama',
   tezina:'lako',
   sastojci:['piskote', 'pavlaka', 'jagode', 'slag']
},
{ name: 'palacinke',
 tezina: 'lako',
sastojci: ['brasno','jaja','ulje','secer', 'so', 'prasakZaPecivo']
},
{
  name: 'punjeneTikvice',
  tezina: 'tesko',
  sastojci: ['tikvice','mleveno meso','pirinac', 'luk','ulje']
},
{
  name: 'makaroneSaSirom',
  tezina: 'srednje',
  sastojci: ['makarone','sir','jaja','so','mleko']
},
{
  name: 'plodoviMoraUTortilji',
  tezina: 'srednje',
  sastojci: ['tortilje','plodoviMora','meksickaMesavina']
}
]
recepti.forEach(element=>{
   if(element.tezina=='lako'){
       console.log(element)
   }});


