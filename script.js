const listeMots = ["Cachalot", "Pétunia", "Serviette"]

let score = 0

let motUtilisateur = prompt("Entrez le premier mot du tableau :")

if (motUtilisateur === listeMots[0]) {
    score++
    alert("Bravo ! Vous avez trouvé le mot " + listeMots[0] + " ! Votre score est de " + score)
} else {
    alert("Dommage, ce n'est pas le bon mot. Le mot était " + listeMots[0] + ". Votre score est de " + score)
}

motUtilisateur = prompt("Entrez le deuxième mot du tableau :")

if (motUtilisateur === listeMots[1]) {
    score++
    alert("Bravo ! Vous avez trouvé le mot " + listeMots[1] + " ! Votre score est de " + score)
} else {
    alert("Dommage, ce n'est pas le bon mot. Le mot était " + listeMots[1] + ". Votre score est de " + score)
}

motUtilisateur = prompt("Entrez le troisième mot du tableau :")

if (motUtilisateur === listeMots[2]) {
    score++   
    alert("Bravo ! Vous avez trouvé le mot " + listeMots[2] + " ! Votre score est de " + score)
} else {
    alert("Dommage, ce n'est pas le bon mot. Le mot était " + listeMots[2] + ". Votre score est de " + score)
}