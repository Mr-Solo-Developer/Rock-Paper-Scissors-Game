let score = JSON.parse(localStorage.getItem(`score`));
let result = ``;
let coMove = ``;
function updata() {
    document.querySelector(`.para`).innerHTML = `Wins = ${score.Wins}   Losses = ${score.losses}   Ties = ${score.Ties}`;
}
function updato(sas) {
    document.querySelector(`.pa`).innerHTML = `You 
    <img src="./Assists/${sas}-emoji.png" alt=".">
    .
    <img src="./Assists/${coMove}-emoji.png" alt=".">
    Computer `;
}
function updat1o() {
    document.querySelector(`.p21a`).innerHTML = `You ${result} `;
}
// updato();
// updata();
function randommove() {
    raNum = Math.random();
    coMove = ``;
    if (raNum >= 0 && raNum < 1 / 3) {
        coMove = `rock`;
    } else if (raNum >= 1 / 3 && raNum < 2 / 3) {
        coMove = `paper`;
    } else if (raNum >= 2 / 3 && raNum < 1) {
        coMove = `scissors`;
    }
    console.log(coMove);
}
function Arise(re1, re2, re3) {
    score = JSON.parse(localStorage.getItem(`score`)) || {
        Wins: 0,
        Ties: 0,
        losses: 0
    };
    if (coMove === re1) {
        result = `tie`;
    } else if (coMove === re2) {
        result = `Lose`
    } else if (coMove === re3) {
        result = `Win`;
    }
    if (result === `Win`) {
        score.Wins += 1;
    } else if (result === `Lose`) {
        score.losses += 1;
    } else if (result === `tie`) {
        score.Ties += 1;
    }
    localStorage.setItem(`score`, JSON.stringify(score))
    updata();
    updato();

}
