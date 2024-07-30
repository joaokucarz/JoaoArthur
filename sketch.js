//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 45;
let raio = diametro/2
let velocidadeXBolinha = 1;
let velocidadeYBolinha = 1;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
 criacaoBolinha();
  movimento();
    colisao();
}
function criacaoBolinha (){
    circle(xBolinha, yBolinha, diametro);
}
function movimento(){
  //aaaaaaaaaaaaaaaaaa
  xBolinha+=velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisao (){
 if (xBolinha  + raio > width || xBolinha  < 0){
    velocidadeXBolinha*= -1}
  if (yBolinha > height || yBolinha < 0) {
        velocidadeYBolinha *= -1;
    }
}