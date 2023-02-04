import random

# Benutzereingaben abrufe (folgende Dinge prüfen: gültigen Zahlenbereich prüfen, nicht zwei gleiche Zahlen wählen)
benutzerNummer = []
for i in range(0, 6):
    number = int(input("Wähle eine Zahl zwischen 1 und 49 aus:"))
    while (number in benutzerNummer or number < 1 or number > 49):
        print("Bitte probiere es nochmal aus.")
        number = int(input("Wähle eine Zahl zwischen 1 und 49 aus:"))
    benutzerNummer.append(number)
    benutzerNummer.sort()

print("Deine Wahl " + str(benutzerNummer))

# Lottozahlengenerator
zahlenliste = []
x = 0

while x < 6: #Führe folgenden Code solange aus, solange x kleiner als 6 ist.
    zahl = random.randint(1, 49)
    if zahl in zahlenliste:
        continue
    else:
        zahlenliste.append(zahl)
        # Zählen beenden durch:
        x = x + 1
        zahlenliste.sort()

print("Hey Techi, das sind die heutigen Lotto Zahlen:")
print(zahlenliste)

# Richtig getippte Zahlen finden
counter = 0
for number in benutzerNummer:
    if number in zahlenliste:
        counter += 1
print("Du hast " + str(counter) + " Nummer(n) richtig geraten.")

if counter <= 3:
    print("kein Gewinn")
elif counter == 4:
    print("Gewinn")
elif counter == 5:
    print("Superpreis")
else:
    print("Hauptgewinn")
