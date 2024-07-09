// Importações
import readlineSync from "readline-sync";
import { getWinRank } from "./xpFunctions.js";

//
const prompt = readlineSync.question;

// Função
function ranking(value1, value2) {
  let mediaRanking = value1 - value2;
  return mediaRanking;
}

// Obtendo valores
let valueVictories = Number(prompt("Quantas vitórias você obteve?: "));
let valueDefeats = Number(prompt("Quantas vezes foi derrotado?: "));

let balanceVictories = ranking(valueVictories, valueDefeats);
console.log(
  `O Herói tem de saldo de ${balanceVictories} está no nível de ${getWinRank(
    balanceVictories
  )}`
);
