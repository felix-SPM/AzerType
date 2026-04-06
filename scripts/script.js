const choixRadio = document.querySelector(".optionSource")
const zoneProposition = document.querySelector(".zoneProposition")
const boutonValider = document.querySelector("#btnValiderMot")
const zoneSaisie = document.getElementById("inputEcriture")

let indexListe = 0
let liste = []
let score = 0

choixRadio.addEventListener("change", (event) => {
    selectionnerListe(event.target.id)
    changerProposition()
});

boutonValider.addEventListener("click", () => {
    updateScore(verifierSaisie() ? score++ : score)
    changerProposition()
})

function changerProposition () {

    indexListe = (indexListe >= liste.length ? 0 : indexListe)

    zoneProposition.textContent = liste[indexListe]
    indexListe++
    zoneSaisie.value=""
}

function updateScore () {
        const champScore = document.querySelector(".zoneScore")

        champScore.textContent = "Votre score : "+score
}

function verifierSaisie () {
    
    return((zoneSaisie.value === zoneProposition.textContent ? 1 : 0))
}

function selectionnerListe(choix) {
    
    switch (choix) {
        case "phrases":
            liste = [...listePhrases]
            break
        case "mots":
            liste = [...listeMots]
            break
        default:
            break   
    }
}

function lancerBoucleDeJeu(listeMotsLoc, listePhrasesLoc, choix) {
    let compteur = 0
    let resultat = []
    let liste = []
    const zoneProposition = document.querySelector(".zoneProposition")
    

    resultat[0] = 0

    switch (choix) {
        case "phrases":
            liste = [...listePhrasesLoc]
            break
        case "mots":
            liste = [...listeMotsLoc]
            break
        default:
            break   
    }

    while (compteur < liste.length) {
        zoneProposition.textContent = liste[compteur]

        if (reponse === liste[compteur]){
            resultat[0]++
        }
        compteur++
    }

    resultat[1]=liste.length
    return(resultat)
}