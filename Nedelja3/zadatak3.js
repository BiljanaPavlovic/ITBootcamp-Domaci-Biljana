//3. Написати функцију која враћа цену најјефтиније пице од 3 унете
// (уносе се полупречници и цене), користећи две функције изнад.

function maksimum(a,b,c) {
    if(a>b&&a>c){
        console.log(a);
    }
    if(b>=a && b>=c){
        console.log(b);
    }
    if(c>=a && c>=b){
        console.log(c);
    }
    return maksimum;
}

maksimum(5,9,3);


function cenaPoCm(r,c) {
    let pov=Math.pow(r,2)*Math.PI;

    return c/pov;
    
}

console.log(cenaPoCm(5,250));

let pizza1 = cenaPoCm(10,80);
let pizza2= cenaPoCm(12,300);
let pizza3=cenaPoCm(8,200);

function najjeftinija(c,v,n){
   let min= Math.min(c,v,n);
   return min;
}

najjeftinija(pizza1,pizza2,pizza3);