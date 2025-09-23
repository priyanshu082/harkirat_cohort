var x = 1;
function foo() {
    console.log(x);
    var x = 2;
    console.log(x);
}
foo();

var p = 1; 
{ console.log(p); 
  var p = 2; 
  console.log(p);
} 