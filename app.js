let btn = document.querySelector("#btn");
console.log(btn);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function changeBackgroundColor() {
    let a = getRandomInt(256);
    let b = getRandomInt(256);
    let c = getRandomInt(256);

    document.body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;

    btn.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
};

let arrayPunch = ["« Un jour, Chuck Norris a frôlé la mort ; elle ne s’en est jamais remise. »", "« Dieu voulait créer l’Univers en dix jours. Chuck Norris lui en a laissé six. »", "« Si on loue le Seigneur, c'est parce que Chuck Norris est hors de prix. »", "« Chuck Norris a déjà participé à L’Île de la tentation. Bilan : 11 morts, 12 grossesses. »", "« Jésus est né en 1940 avant Chuck Norris. »", "« Un jour, Chuck Norris a avalé un tube entier de somnifères ; il a cligné des yeux. »", "« Depuis le 11 septembre 2001, Chuck Norris ne lance plus d'avions en papier. »", "« Chuck Norris a déjà compté jusqu'à l'infini. Deux fois. »", "« Chuck Norris a fini son forfait illimité. »", "« Un jour, Chuck Norris a commandé un steak dans un restaurant, et le steak a obéi. »"]

let quote = document.querySelector("#textCitation");

function updateQuote() {
    let indexAleatoire = getRandomInt(10);
    quote.textContent = arrayPunch[indexAleatoire];
}

btn.addEventListener("click", changeBackgroundColor);

btn.addEventListener("click", updateQuote);