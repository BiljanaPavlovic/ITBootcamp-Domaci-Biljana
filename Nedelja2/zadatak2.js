var zadatak2 = 'Welcome to DOM';
var naslov = zadatak2;

console.log(naslov);

var noviParagraf=`Олдтајмер или историјско возило је свако возило на моторни погон старије од 30 година, које што приближније одговара оригиналном моделу.

За историјско возило односно за веома стар аутомобил или мотоцикл у народу се одомаћио назив олдтајмер. Тачна старосна дефиниција класичног аутомобила варира широм света, али оно што је заједничко свима јесте то да је возило које прелази 30 година старости припадају групи историјских возила.[1]

Светска федерација за историјска возила – FIVA, дефинише историјско возило као саобраћајно возило на моторни погон:

које је старо најмање 30 година
које је сачувано и одржавано у исправном стању
које се не користи као свакодневно превозно средство
и које је део техничке и културне баштине.[2]
Олдтајмери се групишу по годинама старости односно години почетка производње одређеног модела и деле се по стању очуваности примерка.

Подела по годинама старости:

класа A ancestor пре 31.12.1904.
класа B veteran од 01.01.1905. до 31.12.1918.
класа C vintage од 01.01.1919. до 31.12.1930.
класа D post vintage од 01.01.1931. до 31.12.1945.
класа E postwar од 01.01.1946. до 31.12.1960.
класа F oldtimer од 01.01.1961. до 31.12.1970.
класа G oldtimer од 01.01.1970, али старија од 30 година.[1]
Подела по стању примерка дели се на стање савршен, стање одличан, 
стање врло добар, стање добар, стање некомплатан и стање база делова.`;

const noviParagrafUJs = document.getElementById(`paragraf`);
noviParagrafUJs.innerHTML = noviParagraf;
