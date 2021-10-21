//..Chiedo all'utente quanti Km vuole percorrere.

let elemento = document.getElementById('mio_id');

const km = prompt('Quanti km vuoi percorrere ?');
 console.log(km);

//..Chiedo l'età dell'utente.

let age = prompt('Quanti anni hai ?');
 console.log(age);

//..Calcolo il prezzo del biblietto.

let moltiplicazione = 0.21 * km;
 console.log(moltiplicazione);

 //..Calcolo dello sconto.

 let ventipercento = (moltiplicazione * '0.2');
  console.log(ventipercento);

 let quarantapercento = (moltiplicazione * '0.4');
  console.log(quarantapercento);

 if(age<18){
    elemento.innerHTML=`Costo biglietto: ${ventipercento}`;   
}

 if(age>65){
    elemento.innerHTML=`Costo biglietto: ${quarantapercento}`;   
}
