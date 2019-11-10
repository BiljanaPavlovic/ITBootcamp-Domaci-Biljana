//1. Написати функцију која враћа максимум од 3 броја (уносе се 3 броја)



function maksimum(a,b,c) {
    if(a>=b&&a>=c){
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

maksimum(5,5,3);
maksimum(654165,5646,6546);