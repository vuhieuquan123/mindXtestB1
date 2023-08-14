function divideTeam(array) {
    let team1 = [];
    let team2 = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        team1.push(array[i]);
      } else {
        team2.push(array[i]);
      }
    }
    return [team1, team2];
  }
  
  const array = [60, 40, 55, 75, 64];
  
  const [team1, team2] = divideTeam(array);
  
  console.log(team1); // [60, 55, 64]
  console.log(team2); // [40, 75]