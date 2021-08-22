//Variables locales
var d           = document.getElementById("dibujito");
var texto       = document.getElementById("txt_lineas");
var boton       = document.getElementById("botonP");

boton.addEventListener("click", dibujarPorClick); //dibujarPorClick - Referencia, dibujarPorClick() llamado del metodo
var lienzo  = d.getContext("2d"); //Existe contexto 2d y 3d
var lineas  = parseInt(texto.value);
var l       = 0;
var maximo = 300;
var minimo = 0;
var yi, yf, xi, xf;
var yposicion, xposicion;
var colorL  ="#FAA" ;
var colorB  ="#AFA" ;
var colorC  ="#AAA" ;
var colorD  ="#BBA" ;
var colorE  ="#224" ;

for(l = 0; l < lineas ; l++){
  yi= 10 * (l);
  xf= 10 * (l + 1);
  dibujarLinea(colorL, minimo , yi, xf, maximo);
  console.log("lineas " + l);
}

l = 0;
do{
  xi = 10 * l;
  yi = 10 * (l);
  yf = 10 * (l + 1)
  xf = 10 * (l + 1);
  yposicion = 300 - xi;
  xposicion = 300 - yi;
  dibujarLinea(colorC, xi,maximo,maximo,yposicion);
  dibujarLinea(colorD, xi,minimo,maximo,yf);
  dibujarLinea(colorE, minimo,yi,xposicion,minimo);
  l++
}while(l < lineas);


dibujarLinea(colorB, maximo,maximo,minimo,maximo);
dibujarLinea(colorB, minimo,minimo,minimo,maximo);
dibujarLinea(colorB, maximo,minimo,maximo,maximo);
dibujarLinea(colorB, minimo,minimo,maximo,minimo);
dibujarLinea(colorE,0,300,10,0);
dibujarLinea(colorE,0,290,20,0);
dibujarLinea(colorE,0,290,20,0);





function dibujarPorClick(){
  var x = parseInt(texto.value);
  alert("Estas dibujando.");



}
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
  lienzo.beginPath();  //Funciòn que arranca un dibujo.
  lienzo.strokeStyle = color ; //se pone atributo de objeto lienzo.
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke(); //Trazar una raya
  lienzo.closePath();//Funciòn que cierra un dibujo

}
