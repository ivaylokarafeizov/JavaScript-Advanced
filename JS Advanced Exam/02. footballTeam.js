class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    let addedPlayers = [];

    for (const footballPlayer of footballPlayers) {
      let [name, age, playerValue] = footballPlayer.split('/');
      age = Number(age);
      playerValue = Number(playerValue);

      let player = this.invitedPlayers.find((p) => p.name == name);

      if (!player) {
        player = { name, age, playerValue };
        this.invitedPlayers.push(player);
        addedPlayers.push(name);
      } else {
        if (playerValue > player.playerValue) {
          player.playerValue += playerValue;
        }
      }
    }
    return `You successfully invite ${addedPlayers.join(', ')}.`;
  }

  signContract(selectedPlayer) {
    let [name, playerOffer] = selectedPlayer.split('/');
    playerOffer = Number(playerOffer);

    let player = this.invitedPlayers.find((p) => p.name == name);

    if (!player) {
      throw new Error(`${name} is not invited to the selection list!`);
    } else {
      if (player.playerValue > playerOffer) {
        let priceDifference = player.playerValue - playerOffer;

        throw new Error(
          `The manager's offer is not enough to sign a contract with ${name},` +
            ` ${priceDifference} million more are needed to sign the contract!`
        );
      } else {
        player.playerValue = 'Bought';
      }
    }

    return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
  }

  ageLimit(name, age) {
    age = Number(age);
    let player = this.invitedPlayers.find((p) => p.name == name);

    if (!player) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    if (player.age < age) {
      let ageDiff = age - player.age;

      if (ageDiff > 5) {
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
      } else {
        return `${name} will sign a contract for ${ageDiff} years with ${this.clubName} in ${this.country}!`;
      }
    } else if (player.age >= age) {
      return `${name} is above age limit!`;
    }
  }

  transferWindowResult() {
    let result = [];
    result.push('Players list:');

    for (const player of this.invitedPlayers) {
      result.push(`Player ${player.name}-${player.playerValue}`);
    }
    return result.join('\n');
  }
}

let fTeam = new footballTeam('Barcelona', 'Spain');
console.log(
  fTeam.newAdditions([
    'Kylian Mbappé/23/160',
    'Lionel Messi/35/50',
    'Pau Torres/25/52',
  ])
);
console.log(fTeam.signContract('Kylian Mbappé/240'));
console.log(fTeam.ageLimit('Kylian Mbappé', 30));
console.log(fTeam.transferWindowResult());
