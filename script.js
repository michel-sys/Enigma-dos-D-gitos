let tentativas = 0;
let pontos = 0;

function chutar() {
  let chute = document.getElementById("chute").value;
  let numero = Math.floor(Math.random() * 11);

  document.getElementById("chute").value = "";
  tentativas++;

  if (chute == "") {
    exibirMensagem("Digite um valor válido!", "invalido");
    return;
  }

  if (tentativas > 3) {
    exibirMensagem("Você excedeu o limite de tentativas!", "invalido");
    resetarJogo();
    return;
  }

  if (chute == numero) {
    pontos++;
    exibirMensagem("Certo!", "certo");
    atualizarPontuacao();
    resetarJogo();
  } else {
    let mensagem = chute < numero ? "O número é maior que " + chute + '!' : "O número é menor que " + chute + "!";
    exibirMensagem(mensagem, "errado");
    if (tentativas == 3) {
      exibirMensagem(
        `O número era ${numero}. Você usou todas as tentativas.`,
        "invalido"
      );
      resetarJogo();
    }
  }
}

function exibirMensagem(texto, classe) {
  let h2 = document.querySelector("h2");
  h2.textContent = texto;
  h2.id = classe;
  let body = document.querySelector("body");
  body.id = `background_${classe}`;
}

function resetarJogo() {
  tentativas = 0;
}

function atualizarPontuacao() {
  document.getElementById("numeroPontos").textContent = pontos;
}

// function chutar() {
//     let chute = document.getElementById("chute").value;

//     let numero = Math.floor(Math.random() * 11);

//     document.getElementById('chute').value = '';

//     if (chute == "") {
//       let h2 = document.querySelector("h2");
//       h2.textContent = "Digite um valor valido!";
//       h2.id = "invalido";
//       let body = document.querySelector("body");
//       body.id = "background_invalido";
//     } else {

//       if (chute == numero) {
//         let h2 = document.querySelector("h2");
//         h2.textContent = "Certo!";
//         h2.id = "certo";
//         let body = document.querySelector("body");
//         body.id = "background_certo";
//       } else {
//         let h2 = document.querySelector("h2");
//         h2.textContent = "Errado!";
//         h2.id = "errado";
//         let body = document.querySelector("body");
//         body.id = "background_errado";
//       }
//     }
//   }
