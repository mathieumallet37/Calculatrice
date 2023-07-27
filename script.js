const divide = document.getElementById("button-/");
const number7 = document.getElementById("button-7");
const number8 = document.getElementById("button-8");
const number9 = document.getElementById("button-9");
const multiply = document.getElementById("button-*");
const number4 = document.getElementById("button-4");
const number5 = document.getElementById("button-5");
const number6 = document.getElementById("button-6");
const minus = document.getElementById("button--");
const number1 = document.getElementById("button-1");
const number2 = document.getElementById("button-2");
const number3 = document.getElementById("button-3");
const more = document.getElementById("button-+");
const number0 = document.getElementById("button-0");
const dash = document.getElementById("button-,");
const egal = document.getElementById("button-=");

const output = document.getElementById('output');

function effacer(){
  output.value = "";
}

function afficher(val){

  output.value += val;
}

function calculer() {
  let resultat = eval(output.value);
  if (resultat === Infinity) {
    output.value = 'Division impossible';
  } else {
    output.value = resultat;
  }
}

function test() {
  document.addEventListener('keydown', (e) => {
    const key = e.key;

    // Si la touche est un chiffre ou une opération (+, -, *, /, %), l'ajouter à l'input
    if (/[\d+\-*/%=.,\r\n]/.test(key)) {
      afficher(key);
    }

    // Si la touche Entrée (=) est pressée, effectuer le calcul
    if (key === '=' || key === 'Enter') {
      calculer();
      e.preventDefault(); // Empêcher le comportement par défaut (par exemple, le rechargement de la page)
    }

    // Si la touche Backspace (Retour arrière) est pressée, supprimer le dernier caractère de l'input
    if (key === 'Backspace') {
      effacer();
    }

    // Si la touche Échap (Escape) est pressée, réinitialiser l'input
    if (key === 'Escape') {
      effacer();
    }

    // Ignorer toutes les autres touches (alphabétiques, caractères spéciaux, etc.)
    if (!/[\d+\-*/%=.,\r\n]/.test(key)) {
      e.preventDefault();
    }
  });
}


test();
  

