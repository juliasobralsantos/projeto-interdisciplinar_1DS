function calcularEquacao() {
    var a, b, c, delta, x1, x2;

    a = parseFloat(document.getElementById('a').value);
    b = parseFloat(document.getElementById('b').value);
    c = parseFloat(document.getElementById('c').value);
    delta = b ** 2 - 4 * a * c;

    if (a === 0) {
      exibirResultado("Esta é uma equação de 1º grau.");
    } else if (delta === 0) {
      exibirResultado("Raiz real.");
    } else if (b === 0 || c === 0) {
      exibirResultado("Equação de 2º grau incompleta.");
    } else {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
  
      exibirResultado(`Delta: ${delta}, x´: ${x1}, x´´: ${x2}`);
    }
  }
  
  function exibirResultado(mensagem) {
    document.getElementById('resultado').innerText = mensagem;
  }
  