# -------------------------------------------------------------
# Begrüßen
name = input("Hallo, bist du bereit für das QuizyGame? Verräts du mir deinen Spielernamen?")
print("{}, ah cool. Schön das du hier bist. Viel Spaß beim Spielen.".format(name))

# -------------------------------------------------------------
# Spielen oder Hinzufügen?
frage1 = input(
    "Wenn du mit dem Spiel anfangen möchtest, gebe die Zahl 1 ein. Wenn du lieber selber Fragen einpflegen möchtest, gebe die Zahl 2 ein.")
if frage1 == 1:
    print("Alles klar, jetzt geht es los.")
else:
    print("Hopla, da ist wohl ein Fehler entstanden. Naja hier zum Spiel.")


# Spielfunktion
# ------------------------------------------------------------
def new_game():
    guesses = []
    correct_guesses = 0
    question_num = 1

    for key in questions:
        print(
            "_________________________________________________________________________________________________________")
        print(key)
        for i in options[question_num - 1]:
            print(i)
        guess = input("Eingabe (A, B, C oder D) ")
        guess = guess.upper()
        guesses.append(guess)

        correct_guesses += check_answer(questions.get(key), guess)
        question_num += 1

        display_score(correct_guesses, guesses)


def check_answer(answer, guess):
    if answer == guess:
        print("Richtig!")
        return 1
    else:
        print("Falsch!")
        return 0


def display_score(correct_guesses, guesses):
    print("-------------------------")
    print("ERGEBNIS")
    print("-------------------------")

    print("Antwort: ", end="")
    for i in questions:
        print(questions.get(i), end=" ")
    print()

    print("Guesses: ", end="")
    for i in guesses:
        print(i, end=" ")
    print()
    score = int((correct_guesses / len(questions)) * 100)
    print("Dein score ist: " + str(score) + "%")


def play_again():
    response = input("Willst du nochmal spielen? (Ja oder nein): ")
    response = response.upper()

    if response == "Ja":
        return True
    else:
        return False


# Wörterbuch mit Fragen
# -------------------------------------------------------------
questions = {
    "Welcher Service hilft Ihnen bei der Erstellung Ihres virtuellen Netzwerks in der AWS-Cloud-Infrastruktur?: ": "A",
    "Welche AWS-Services können zum Speichern von Dateien verwendet werden?: ": "C",
    "Mit welchem AWS-Service können Sie einen neuen Domänennamen registrieren?:": "D",
    "Welches Tool können Sie für die Prognose Ihrer AWS-Ausgaben verwenden?: ": "B",
    "Sie haben eine Anwendung, die Fotos und Videos speichert und abruft. Welchen der folgenden Dienste sollten Sie für den Speichermechanismus verwenden?: ": "A"
}
options = [[" A. VPC ", " B. Route53 ", " C. AWS RDS ", " D. AWS EBS "],

           [" A. MySQL ", " B. AWS RDS ", " C. EBS", " D. AWS Cost Explorer "],

           [" A. VPC ", " B. MFA ", " C. EBS Volumes ", " D. Route53 "],

           [" A. VPC ", " B. AWS Cost Explorer ", " C. EBS Volumes ", " D. Route53 "],

           [" A. S3 ", " B. AWS PyCharm  ", " C. Direct Connect ", " D. Route53 "]]

new_game()

while play_again():
    new_game()

print("Byeeeeee!")
