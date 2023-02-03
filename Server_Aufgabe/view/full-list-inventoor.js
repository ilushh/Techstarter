export function generateFullItemList(items){
    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inventoory</title>
        <!--materializecss-->
        <!--Import Google Icon Font-->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@materializecss/materialize@1.2.0/dist/css/materialize.min.css">
        
        <!-- Compiled and minified JavaScript -->
        <script src="https://cdn.jsdelivr.net/npm/@materializecss/materialize@1.2.0/dist/js/materialize.min.js"></script>
            
        <!--Zuletzt meine eigenen Styles => naeher am Objekt-->
        <link rel="stylesheet" href="styles/mystyles.css">
    </head>
    <body>
    <div class="container" > 
        <nav>
            <div class="nav-wrapper">
                <a href="/" class="brand-logo">logo</a>
                <a href="#" data-target="mobile-nav-menu" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <!--Das Menu in der Desktop Ansicht-->
                <ul class="right hide-on-med-and-down">
                    <li><a href="#">Inventar</a></li>
                    <li id="btn_settings_Desktop"><a href="#">Einstellungen</a></li>
                </ul>
            </div>
        </nav>
        <!-- Das Hamburger-Menu in der mobile Ansicht-->
        <ul class="sidenav" id="mobile-nav-menu">
            <li><a href="#">Inventar</a></li>
            <li id="btn_settings_mobile"><a href="#">Einstellungen</a></li>
        </ul>
    </div>
    
    <main id="inventoory-app">
        <div class="container ">
            <div class="row">
                <div class="col s12">
                    <h1 class="left-align" id="main-h1-header">Alle Deine Dinge</h1>
                    <a href="/addKaktus">Kaktus hinzufügen</a></br>
                    <a href="/addItem">Gegenstand hinzufügen</a>
                </div>
            </div>
            <div class="row ">       
            ${createHTMLTable(items)}         
                
            </div>
        </div>
    </main>
    
    <footer class="container page-footer blue-grey darken-3">    
        <div class="row">
        <div class="col l6 s12">
            <h5 class="white-text">Deine smarte Inventarverwaltung</h5>
            <p class="grey-text text-lighten-4">Verwealte alle Deine Dinge. Einfach da wo Du bist</p>
        </div>
        
        </div>
        
        <div class="footer-copyright blue-grey darken-4">
            <div class="container">
                <div class="row">
                    <div class="col s4"> © 2023 inventoory</div>
                    <div class="col s4 offset-s4">
                        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>  
            </div>
        </div>
    </footer>
    
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems);
        });   
    </script>
</body>
</html>`

return html;

};

function createHTMLTable(items){
    let headerNames = Object.keys(items[0])
    let htmlHeader=""
    //Als erstes die Überschriften aus dem Objekt laden
    for (let i = 0; i < headerNames.length; i++){
        htmlHeader = htmlHeader + ` <th>${headerNames[i]}</th>`
    }
    //Am Ende einer Zeile den Edit Button manuell ergänzen
    htmlHeader = htmlHeader + "<th>Edit</th>"

    //Jetzt Zeilenweise die Tabelle aufbauen
    let htmlRow = ""
    for (let linenumber = 0; linenumber<items.length; linenumber++){    

        // Je Item wird eine neue Zeile (=> Table-Row: tr) in der Tabelle angelgt   
        // mit mit J Iterator bewegen wir uns von oben nach unten
        let currItems = Object.values(items[linenumber])
        htmlRow = htmlRow + "<tr>"
        for(let k = 0; k< currItems.length; k++){
            //Jede Zeile besteht aus mehreren Spalten
            // mit mit k-Iterator bewegen wir uns von links nach rechts
            htmlRow = htmlRow + `<td>${currItems[k]}</td>`
        }
        //Dann spalten mnanuell ergaenzen
        htmlRow = htmlRow + `<td><a href="/details/${linenumber}">Anzeigen</a></td>`
        htmlRow = htmlRow + `<td><a href="/edit/${linenumber}">bearbeiten</a></td>`
        htmlRow = htmlRow + `<td><a href="/delete/${linenumber}">löschen</a></td>`
        
        // Die Zeile der Tabelle schließen. 
        htmlRow = htmlRow + "</tr>"
    }

    let htmlTable = `<table class="striped highlight responsive-table">
        <thead><tr>${htmlHeader}</tr></thead>
        <tbody>${htmlRow}</tbody>
    </table>`    

    //Wir liefern die Fertige Tabelle zurück
    return htmlTable;
}