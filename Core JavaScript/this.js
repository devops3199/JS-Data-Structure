var a = 1;
var outter = () => {
    var a = 2;
    console.log(this.a);
}
outter();
console.log(this.a);