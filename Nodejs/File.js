// Lege ein Modul an.
let fs = require('fs');

 // legen eine einfache Funktion an, welche einen Ordner erstell.
fs.mkdir("Testordner", dirCreated);

 
function dirCreated(){
    console.log("Fertig erstellt");
}