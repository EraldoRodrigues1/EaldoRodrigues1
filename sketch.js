// fantasia, aventura, drama

// a viagem de chihiro, LIVRE, fantasia aventura
// guardiões da galáxia, 12, fantasia, aventura
// as aventuras de pi, 10, drama, fantasia, aventura
// depois da chuva, 10, drama
// paddington, LIVRE, fantasia, aventura
// ladrões de bicicleta, 12, drama
// o menino de descobriu o vento, 14, drama
// Five Night at Freddy´s o pesadelo sem fim, 14, horror, aventura
// viva a vida é uma festa, LIVRE, fantasia, drama, aventura
// a casa monstro, 10, fantasia, aventura, horror

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(700, 400);
  createElement("h2", "Recomendador De Filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("10");
  campoFantasia = createCheckbox("Gosta De Fantasia?");
  campoAventura = createCheckbox("Gosta de Aventura?");
}
function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  
  fill(color(76,55,115))
  textAlign(CENTER, CENTER);
  textSize(30)
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if(idade >= 10) {
    if(idade >= 14) {
      return "o menino que descobriu o vento";
    } else {
      if(idade >=12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "guardiões da galáxia";
        } else {
        return "Five Night at Freddy's o pesadelo sem fim";
        }
      } else {
        if(gostaDeFantasia) {
          return "as aventuras de pi";
        } else {
          return "a casa monstro"
        }
      }
    }
  } else {
    if(gostaDeFantasia) {
      return "a viagem de chihiro";
    } else {
      return "viva a vida é uma festa";
    }
  }
}// fantasia, aventura, drama

// a viagem de chihiro, LIVRE, fantasia aventura
// guardiões da galáxia, 12, fantasia, aventura
// as aventuras de pi, 10, drama, fantasia, aventura
// depois da chuva, 10, drama
// paddington, LIVRE, fantasia, aventura
// ladrões de bicicleta, 12, drama
// o menino de descobriu o vento, 14, drama
// Five Night at Freddy´s o pesadelo sem fim, 14, horror, aventura
// viva a vida é uma festa, LIVRE, fantasia, drama, aventura
// a casa monstro, 10, fantasia, aventura, horror

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(700, 400);
  createElement("h2", "Recomendador De Filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("10");
  campoFantasia = createCheckbox("Gosta De Fantasia?");
  campoAventura = createCheckbox("Gosta de Aventura?");
}
function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  
  fill(color(76,55,115))
  textAlign(CENTER, CENTER);
  textSize(30)
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if(idade >= 10) {
    if(idade >= 14) {
      return "o menino que descobriu o vento";
    } else {
      if(idade >=12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "guardiões da galáxia";
        } else {
        return "Five Night at Freddy's o pesadelo sem fim";
        }
      } else {
        if(gostaDeFantasia) {
          return "as aventuras de pi";
        } else {
          return "a casa monstro"
        }
      }
    }
  } else {
    if(gostaDeFantasia) {
      return "a viagem de chihiro";
    } else {
      return "viva a vida é uma festa";
    }
  }
}// fantasia, aventura, drama

// a viagem de chihiro, LIVRE, fantasia aventura
// guardiões da galáxia, 12, fantasia, aventura
// as aventuras de pi, 10, drama, fantasia, aventura
// depois da chuva, 10, drama
// paddington, LIVRE, fantasia, aventura
// ladrões de bicicleta, 12, drama
// o menino de descobriu o vento, 14, drama
// Five Night at Freddy´s o pesadelo sem fim, 14, horror, aventura
// viva a vida é uma festa, LIVRE, fantasia, drama, aventura
// a casa monstro, 10, fantasia, aventura, horror

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(700, 400);
  createElement("h2", "Recomendador De Filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("10");
  campoFantasia = createCheckbox("Gosta De Fantasia?");
  campoAventura = createCheckbox("Gosta de Aventura?");
}
function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  
  fill(color(76,55,115))
  textAlign(CENTER, CENTER);
  textSize(30)
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if(idade >= 10) {
    if(idade >= 14) {
      return "o menino que descobriu o vento";
    } else {
      if(idade >=12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "guardiões da galáxia";
        } else {
        return "Five Night at Freddy's o pesadelo sem fim";
        }
      } else {
        if(gostaDeFantasia) {
          return "as aventuras de pi";
        } else {
          return "a casa monstro"
        }
      }
    }
  } else {
    if(gostaDeFantasia) {
      return "a viagem de chihiro";
    } else {
      return "viva a vida é uma festa";
    }
  }
}