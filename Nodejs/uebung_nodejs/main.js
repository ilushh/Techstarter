const fs = require('fs');

// liest "beispieldaten.txt" und ihren Inhalt der Datei 
fs.readFile('beispieldaten.txt', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // writeFile schreibt die angegebenen Daten in "person.json"
  fs.writeFile('person.json', JSON.stringify([
    {
      "name": "Andy",
      "Nachname": "Warhol",
      "Beruf": "Künstler"
    },
    {
      "name": "unbekannt",
      "Nachname": "unbekannt",
      "Pseudonym": "Banksy",
      "Beruf": "Künstler"
    }
  ]), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("JSON object written to person.json");
  });
});

