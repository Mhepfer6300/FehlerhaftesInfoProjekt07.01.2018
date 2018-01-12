$(document).ready(function () {

    $(document).on("click", "#logout", function () {
        $.post("../anfrage", {
            typ: "logout"
        }, function (data) {
            if (data.typ == "logout") {
                $("body").html("Du bist erfolgreich abgemeldet. Neu laden zum erneuten Anmelden!");
            }
        })
    });

    $(document).on("click", "#Anmeldeknopf", function () {
        $.post("../anfrage", {
            typ: "anmeldedaten",
            anmeldename: $("#Anmeldename").val(),
            passwort: $("#passwort").val()
        }, function (data) {
            if (data.typ == "überprüfung") {
                if (data.text == "ok") {
                    $("body").html("Gratulation, du bist angemeldet!")
                            .append("<br><input type='button' value='logout' id='logout'/>");
               
                     } else {
                    $("body").append("<br>Die Anmeldedaten waren leider falsch!");

                }
            }
        }
        );
    });

    $(document).on("click", "#Registrierknopf", function () {
        $("body").html("Registrierung<br>")
                .append(" <br>" + "neuer Benutzername: <input type='text' id='benutzername'/><br>\n")
                .append("gewünschtes Passwort: <input type='password' id='neuespasswort'/><br>\n")
                .append("Passwort wiederholen: <input type='password' id='passwortbestätigen'/><br>\n")
                .append("<input type='checkbox' name='checkknopf' id='Überprüfungsknopf'/>"+"Ich akzeptiere die AGB"+ " <br>"+ " <br>")
                .append("<input type='button' value='Benutzer erstellen' id='neueruserknopf'/>");
    });

    $(document).on("click", "#neueruserknopf", function () {
        $("body").html("Herzlichen Glückwunsch sie haben sich erfolgreich auf unserer Seite registriert!<br>")
                .append("<input type='button' value='Zum Sportmagazin!' id='HomepageKnopf'/<\");
    });

    $(document).on("click", "#HomepageKnopf", function () {
        $("body").html("EH - Das Sportmagazin!<br>Bundesliga Aktuell!<br><br>")
                .append("<br>" + "Aktuelle Tabelle zum 18.Spieltag der Fußball-Bundesliga:<br>")
                .append("<input type='button' value='Tabelle(18.Spieltag)' id='Tabellenknopf'/>\n")
                .append("<input type='button' value='Heimtabelle' id='TabellenknopfHeim'/>\n")
                .append("<input type='button' value='Auswärtstabelle' id='TabellenknopfAuswärts'/><br>\n")
                .append(" <br>" + "Toptorjäger und ihre Verfolger:<br>")
                .append("<input type='button' value='Torschützenliste' id='Torschützenbutton'/><br>\n")
                .append(" <br>" + "Die aktuellsten Transfergerüchte:<br>")
                .append("<input type='button' value='Transfernews' id='Transferbutton'/>");
    });

    $(document).on("click", "#Tabellenknopf", function () {
        $("body").html("Die Aktuelle Tabelle der Saison 2012/2013!<br><br>")
                .append("<br><input type='image' src='http://www.r-winners.de/sport_s04/Bilders04/s042013_ges_g.jpg'/>")
                .append("<input type='button' value='Zurück zum Sportmagazin!' id='HomepageKnopf'/<\");
    });

    $(document).on("click", "#TabellenknopfHeim", function () {
        $("body").html("Die Heimsbilanz aller Teams!<br><br>")
                .append("<br><input type='image' src='http://www.r-winners.de/sport_s04/Bilders04/s042013_ges_h.jpg'/>")
                .append("<input type='button' value='Zurück zum Sportmagazin!' id='HomepageKnopf'/<\");
    });

    $(document).on("click", "#TabellenknopfAuswärts", function () {
        $("body").html("Die Auswärtsbilanz aller Teams!<br>")
                .append("<br><input type='image' src='http://www.r-winners.de/sport_s04/Bilders04/s042013_ges_a.jpg'/>")
                .append("<input type='button' value='Zurück zum Sportmagazin!' id='HomepageKnopf'/<\");
    });

    $(document).on("click", "#Torschützenbutton", function () {
        $("body").html("Die Toptorjäger und ihre stärksten Rivalen!<br><br>")
                .append("1.  Robert Lewandowski    (FC Bayern München)       Tore 15")
                .append("2.  Pierre - E.Aubameyang (Borussia Dortmund)       Tore 13")
                .append("3.  Alfred Finnbogadson   (FC Augsburg)             Tore 11")
                .append("4.  Mark Uth              (TSG Hoffenheim)          Tore 9")
                .append("5.  Kevin Volland         (Bayer 04 Leverkusen)")   Tore 9")
                .append("6.  Timo Werner           (RB Leipzig)              Tore 8")
                .append("7.  Nils Petersen         (SC Freiburg)             Tore 8")
                .append("8.  Michael Gregoritsch   (FC Augsburg)             Tore 8")
                .append(".   Guido Burgstaller     (FC Schalke)              Tore 7")
                .append("10. Salomon Kalou         (Hertha BSC)              Tore 7")                
                .append("<input type='button' value='Zurück zum Sportmagazin!' id='HomepageKnopf'/<\");
    });

    $(document).on("click", "#Transferbutton", function () {
        $("body").html("Die aller heißesten Gerüchte, die neusten Transfers und Vertragsverhandlungen!<br>")
                .append("Momentan ist der Transfermarkt leider geschlossen, weshalb es keine neuen Verhandlungen gibt.")
                .append("<input type='button' value='Zurück zum Sportmagazin!' id='HomepageKnopf'/<\");
    });



    $.post("../anfrage",
            {
                typ: "angemeldet"
            },
            function (data) {

                if (data.typ == "angemeldet") {
                    if (data.text == "nein") {

                        $("body").html("Einloggen<br>\nName: <input type='text' id='Anmeldename'/><br>")
                                .append("Passwort: <input type='password' id='passwort'/><br>\n")
                                .append("<input type='button' value='OK' id='Anmeldeknopf'/>\n")
                                .append("<input type='button' value='Registrieren' id='Registrierknopf'/><br>\n")
                        .append("<input type='button' value='Passwort vergessen?' id='Passwortvergessenknopf'/><br>\n");
                    } else {
                        $("body").html("Glückwunsch, du bist angemeldet!")
                                .append("<br><input type='button' value='logout' id='logout'/>");
                    }
                }
            }
    );

$(document).on("click", "#Passwortvergessenknopf", function () {
    $("body").html("Leider können wir ihr Passwort nicht wiederherstellen, weshalb sie sich erneut anmelden müssen.")
            .append("<br><input type='image' src='https://t4.ftcdn.net/jpg/01/69/35/23/240_F_169352390_BIqHe9sWR33ULPNkIuPdyqWM4lMuxC8z.jpg'/>");
});
});
