/* Arquivo = desafio-1.js*/
// Importando funções getXP
import {
  getXPHeroLife,
  getXPHeroBattle,
  getXPBattleWon,
  getXPLostBattle,
} from "./xpFunctions.js";

// importando readline-sync como prompt
import readlineSync from "readline-sync";

const prompt = readlineSync.question;

// Declarando variáveis
let nameHero = "";
let heroLife = 0;
let heroBattle = 0;
let battlesWon = 0;
let lostBattles = 0;
let xpHeroLife = 0;
let xpHeroBattle = 0;
let xpBattleWon = 0;
let xpLostBattle = 0;

let heroXP = 0;
let heroRating = "Ferro";

// Obtendo informações sobre o Herói
nameHero = prompt("Qual é o seu nome Herói?: ");

heroBattle = parseInt(prompt(`${nameHero} quantas batalhas você lutou?: `));
xpHeroBattle = getXPHeroBattle(heroBattle);
console.log(
  `Por ter lutado ${heroBattle} batalha(s) você recebeu ${xpHeroBattle} XP meu caro ${nameHero} \n`
);

heroLife = parseInt(
  prompt(
    `Agora ${nameHero}, após lutar ${heroBattle} batalhas, quantas vidas ainda lhe restam?: `
  )
);
xpHeroLife = getXPHeroLife(heroLife);
console.log(
  `Por ainda lhe restarem ${heroLife} vidas, você recebe mais ${xpHeroLife} XP, parabéns... \n`
);

battlesWon = parseInt(
  prompt(
    `Das suas ${heroBattle} batalhas, em quantas delas a vitória lhe abraçou, cara guerreiro ${nameHero}?: `
  )
);
xpBattleWon = getXPBattleWon(battlesWon);
console.log(
  `A(s) sua(s) ${battlesWon} vitória(s) lhe concedem mais ${xpBattleWon} XP \n`
);

lostBattles = parseInt(
  prompt(
    `Em uma guerra aprendemos com vitórias e derrotas, agora conte-me, quantas derrotas lhe ensinaram como vencer?: `
  )
);
xpLostBattle = getXPLostBattle(lostBattles);
console.log(
  `Regras são regras meu caro guerreiro ${nameHero}, as suas ${lostBattles} derrotas lhe custaram a perda de ${xpLostBattle} XP \n`
);

let totalXP = Number(xpHeroLife + xpHeroBattle + xpBattleWon - xpLostBattle);

if (totalXP <= 1000) {
  console.log(
    `Guerreido de nome ${nameHero}, você atingiu a marca de ${totalXP} XP, tornando-se um guerreiro de nível "Ferro"`
  );
} else if (totalXP > 1000 && totalXP <= 2000) {
  console.log(
    `Guerreido de nome ${nameHero}, você atingiu a marca de ${totalXP} XP, tornando-se um guerreiro de nível "Bronze"`
  );
} else if (totalXP > 2000 && totalXP <= 5000) {
  console.log(
    `Guerreido de nome ${nameHero}, você atingiu a marca de ${totalXP} XP, tornando-se um guerreiro de nível "Prata"`
  );
} else if (totalXP > 5000 && totalXP <= 7000) {
  console.log(
    `Guerreido de nome ${nameHero}, você atingiu a marca de ${totalXP} XP, tornando-se um guerreiro de nível "Ouro"`
  );
} else if (totalXP > 7000 && totalXP <= 8000) {
  console.log(
    `Guerreido de nome ${nameHero}, você atingiu a marca de ${totalXP} XP, tornando-se um guerreiro de nível "Platina"`
  );
} else if (totalXP > 8000 && totalXP <= 9000) {
  console.log(
    `Guerreido de nome ${nameHero}, você atingiu a marca de ${totalXP} XP, tornando-se um guerreiro de nível "Ascendente"`
  );
} else if (totalXP > 9000 && totalXP <= 10000) {
  console.log(
    `Guerreido de nome ${nameHero}, você atingiu a marca de ${totalXP} XP, tornando-se um guerreiro de nível "Imortal"`
  );
} else {
  console.log(
    `Guerreido de nome ${nameHero}, você atingiu a marca de ${totalXP} XP, tornando-se um guerreiro de nível "Radiante"`
  );
}
