const listeMots = ["Cachalot", "Pétunia", "Serviette"]

let score = 0
for(i=0;i<=2;i++)
{
    let motUtilisateur = prompt("Entrez le mot "+listeMots[i]+": ")
    if (motUtilisateur === listeMots[i])
    {
        score++
    }
}

console.log("Votre score est de "+score+"/3")


