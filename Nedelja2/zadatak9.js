var n = 5;
    var a="";
    for (var i = 0; i <n; i++) {
    var myspace = "";   
    for(let s = 0; s <(n-i-1); s++) {
        myspace += " ";
    }
        for (var j = 1; j <= 2*i + 1; j++) {
            a+="#";

        }
        console.log(myspace+a);
        a="";
    }