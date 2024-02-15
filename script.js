let pontos = 0;

function chutar() {
  let chute = document.getElementById("chute").value;
  let numero = Math.floor(Math.random() * 11);
  document.getElementById("chute").value = "";

  if (chute == "") {
    let h2 = document.querySelector("h2");
    h2.textContent = "Digite um valor válido!";
    h2.id = "invalido";
    let body = document.querySelector("body");
    body.id = "background_invalido";
  } else {
    if (chute == numero) {
      let h2 = document.querySelector("h2");
      h2.textContent = "Certo!";
      h2.id = "certo";
      let body = document.querySelector("body");
      body.id = "background_certo";
      pontos++;
    } else {
      let h2 = document.querySelector("h2");
      h2.textContent = "Errado! O número era " + numero + "!";
      h2.id = "errado";
      let body = document.querySelector("body");
      body.id = "background_errado";
      pontos = Math.max(0, pontos - 1);
    }
    document.getElementById("numeroPontos").textContent = pontos;
  }
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
