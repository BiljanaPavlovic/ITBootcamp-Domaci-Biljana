//2. Написати функцију која израчунава цену пице по квадратном центиметру 
//(уносе се цена и полупречник)




function cenaPoCm(r,c) {
    let pov=Math.pow(r,2)*Math.PI;

    return c/pov;
    
}

console.log(cenaPoCm(5,250));

