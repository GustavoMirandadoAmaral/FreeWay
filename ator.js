//Código do Ator

let xAtor = 85;
let yAtor = 380;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
   yAtor -= 3; 
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3; 
    }  
  }  
  if (keyIsDown(RIGHT_ARROW)){
   if(podeSeMoverLados2()){
    xAtor += 3;
   }
  }
  if (keyIsDown(LEFT_ARROW)){
    if(podeSeMoverLados()){
  xAtor -= 3;
    }
  }  
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
        if(colisao){
        voltaAtorParaPosicaoInicial();
        somDaColisao.play();
        if(pontosMaiorQueZero()){
          meusPontos -= 1
        }                    
      }                         
    }
  }
  
function voltaAtorParaPosicaoInicial(){
  yAtor = 366
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,0,255))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos +=1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366
}

function podeSeMoverLados(){
  return xAtor > 0  
}

function podeSeMoverLados2(){
  return xAtor < 470
}