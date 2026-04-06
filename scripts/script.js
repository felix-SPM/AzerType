function afficherResultat(resultat, nbrMots) {
    alert("Votre score est de " + resultat + " sur " + nbrMots)
}

function choisirPhrasesOuMots() {

    let choix=""

    while ((choix !== "Phrases") && (choix !== "Mots"))  
    {
        choix=prompt("Voulez vous jouer avec des phrases ou des mots (taper Phrases ou Mots) :")
    }

    return(choix)
}

function lancerBoucleDeJeu(listeMotsLoc, listePhrasesLoc, choix) {
    let compteur = 0
    let resultat = []
    let liste = []

    resultat[0] = 0

    switch (choix) {
        case "Phrases":
            liste = [...listePhrasesLoc]
            break
        case "Mots":
            liste = [...listeMotsLoc]
            break
        default:
            break   
    }

    while (compteur < liste.length) {
        reponse = prompt("Ecrivez : "+liste[compteur])
        if (reponse === liste[compteur]){
            resultat[0]++
        }
        compteur++
    }

    resultat[1]=liste.length
    return(resultat)
}

function lancerJeu() {
    let resultat = lancerBoucleDeJeu(listeMots, listePhrases, choisirPhrasesOuMots())

    afficherResultat(resultat[0], resultat[1])
}