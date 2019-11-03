
    {
        var n=5;
  
    for (var i = 1; i <= n; i++) {
      var x = '';
      
      for (var j = 1; j <= (n - i); j++) {
        x += ' ';
      }
      
      for (var k = 1; k <= i; k++) {
        x += '#';
      }
      
      console.log(x);
    }
    
let counter='';

for(let n = 5; n >= 1; n--){
    counter+='#';
console.log(counter);
}

    }