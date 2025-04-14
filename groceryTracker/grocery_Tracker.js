let grocery1;
let grocery2;
let grocery3;
let grocery4;

function total() {
 grocery1 = parseFloat(document.getElementById('grocery1').value);
 grocery2 = parseFloat(document.getElementById('grocery2').value);
 grocery3 = parseFloat(document.getElementById('grocery3').value);
 grocery4 = parseFloat(document.getElementById('grocery4').value);

 let total = grocery1 + grocery2 + grocery3 + grocery4;
  document.getElementById('resultado').innerText = `La cuenta total es: ${total}`;
}