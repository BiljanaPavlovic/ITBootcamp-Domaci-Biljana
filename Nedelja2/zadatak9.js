let n=5;
let x=' ';
let y=' ';

for(let i=1; i<=n; i++){
   x= ' ';
   y=' ';

for(let j =1; j<=(n-i); j++){
  x+=' ';
}
for(let k=1; k<=i; k++){
  x+='#';
}
for( j=1; j<=i; j++){
  y+='#';
}
console.log(`${x} ${y}`);
}