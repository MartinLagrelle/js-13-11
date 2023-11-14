let nom = "Lagrelle"
let prenom = prompt("entrer un prénom");
let age = prompt("entrer votre age");
let taille = 1.80

console.log(nom, prenom, age, taille);

let concat = nom + ", " + prenom + ", " + age + ", " + taille

console.log(concat)

if (age > 18){
    console.log(concat, "vous êtes majeur")
}
else{
    console.log(concat, "vous êtes mineur")
}
