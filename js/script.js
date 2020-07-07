var eta = parseInt(prompt("inserisci l'età"));

var km = parseInt(prompt("inserisci kilometri che devi percorrere"));

var prezzo = km * 0.21;

var prezzoFinale = "Il costo del biglietto è: " + prezzo + "$";

if (eta < 18) {
  prezzoFinale = prezzo * 0.8;
} else if (eta > 65) {
  prezzoFinale = prezzo * 0.6;
}



document.getElementById("prezzo").innerHTML = prezzoFinale;
