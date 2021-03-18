function Khoahoc(ten,hocphi)
{ this.Ten =ten;
    this.Hocphi=hocphi;


}
Khoahoc.prototype.mota = function()
{ 
    console.log("helo"+ this.Ten+" "+this.Hocphi);
}
var nodejs = new Khoahoc("laptrinhjs",8000)
nodejs.mota();