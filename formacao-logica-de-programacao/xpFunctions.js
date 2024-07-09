// getXPHeroLife
export function getXPHeroLife(value) {
  let xp;
  switch (value) {
    case 10:
      xp = 3600;
      break;

    case 9:
      xp = 3000;
      break;

    case 8:
      xp = 2700;
      break;

    case 7:
      xp = 2400;
      break;

    case 6:
      xp = 2100;
      break;

    case 5:
      xp = 1600;
      break;

    case 4:
      xp = 1000;
      break;

    case 3:
      xp = 800;
      break;

    case 2:
      xp = 400;
      break;

    case 1:
      xp = 200;
      break;

    default:
      xp = 0;
  }
  return xp;
}

// getXPHeroBattle
export function getXPHeroBattle(value) {
  let xp;
  switch (value) {
    case 10:
      xp = 3600;
      break;

    case 9:
      xp = 3000;
      break;

    case 8:
      xp = 2700;
      break;

    case 7:
      xp = 2400;
      break;

    case 6:
      xp = 2100;
      break;

    case 5:
      xp = 1600;
      break;

    case 4:
      xp = 1000;
      break;

    case 3:
      xp = 800;
      break;

    case 2:
      xp = 400;
      break;

    case 1:
      xp = 200;
      break;

    default:
      xp = 0;
  }
  return xp;
}

// getXPBattleWon
export function getXPBattleWon(value) {
  let xp;
  switch (value) {
    case 10:
      xp = 4000;
      break;

    case 9:
      xp = 3600;
      break;

    case 8:
      xp = 3200;
      break;

    case 7:
      xp = 2800;
      break;

    case 6:
      xp = 2400;
      break;

    case 5:
      xp = 2000;
      break;

    case 4:
      xp = 1600;
      break;

    case 3:
      xp = 1200;
      break;

    case 2:
      xp = 800;
      break;

    case 1:
      xp = 400;
      break;

    default:
      xp = 0;
  }
  return xp;
}

// getXPLostBattle
export function getXPLostBattle(value) {
  let xp;
  switch (value) {
    case 10:
      xp = 2000;
      break;

    case 9:
      xp = 1800;
      break;

    case 8:
      xp = 1600;
      break;

    case 7:
      xp = 1400;
      break;

    case 6:
      xp = 1200;
      break;

    case 5:
      xp = 1000;
      break;

    case 4:
      xp = 800;
      break;

    case 3:
      xp = 600;
      break;

    case 2:
      xp = 400;
      break;

    case 1:
      xp = 200;
      break;

    default:
      xp = 0;
  }
  return xp;
}

// getWinRank
export function getWinRank(value) {
  let rank;
  if (value < 10) {
    rank = "Ferro";
  } else if (value >= 10 && value <= 20) {
    rank = "Bronze";
  } else if (value > 20 && value <= 50) {
    rank = "Prata";
  } else if (value > 50 && value <= 80) {
    rank = "Ouro";
  } else if (value > 80 && value <= 90) {
    rank = "Diamante";
  } else if (value > 90 && value <= 100) {
    rank = "Lendário";
  } else if (value > 100) {
    rank = "Imortal";
  } else {
    rank = 0;
  }
  return rank;
}
