function tinhtong(a,b)
{
  return a+b;
}
var x = tinhtong(4,4)

console.log(x);

function helo(){

    console.log("helothe gioi");
}
function goiham(fn){
    fn();
}

goiham(helo);

var tong = function(){
    console.log("helothegioi")
}
tong();