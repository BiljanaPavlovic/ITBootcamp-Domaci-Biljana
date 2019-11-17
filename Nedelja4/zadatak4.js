/*4. Направити објекат из првог задатка, али уместо низа String-ова,
 направити низ објеката из трећег задатка*/

 let recept={
     name:'makaroneSaSirom',
     tezina:'srednje',
     sastojci:[
        sastojak1 = {
            imeSastojka: 'makarone',
            kolicina: '1kg',
            cena: 60
        },
    
         {
        imeSastojka: 'sir',
        kolicina: '1kg',
        cena: 200
        },
    
        {
            imeSastojka: 'jaja',
            kolicina: 3,
            cena: 10
        },
        {
            imeSastojka: 'ulje',
            kolicina: 'malo',
            cena: 5},
    
            {
                imeSastojka: 'so',
                kolicina:'malo',
                cena:5
            }
     ]
 }
 console.log(recept);
