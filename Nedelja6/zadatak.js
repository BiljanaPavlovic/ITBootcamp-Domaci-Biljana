let username = document.querySelector('#username');
let password = document.querySelector('#password');
let dugme = document.querySelector('#btn');

dugme.addEventListener('click',()=>{

        if(username.value.length<3||username.value.length>15){
        alert('Neodgovarajuca duzina')
            
        }else if(isNaN(username.value[0])){
            console.log(username.value)
        }else{
            alert('Ne moze broj')
        }

      //  if(username.value==JSON.username||password.value==JSON.password){
        //    alert('Uspesna prijava!')
     //   }else{
      //      alert('Neuspesna prijava!')
       // }
        
    });
    /*
    Napravili bismo feach funkciju u koju bismo stavili url backenda i 
    upotrebili bismo metod POST po kojem proveravamo korisnika, a za log out 
    se koristi metod DELETE*/ 
  

    


  