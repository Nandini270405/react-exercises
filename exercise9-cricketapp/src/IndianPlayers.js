function IndianPlayers() {
  const team = ['Rohit', 'Virat', 'Rahul', 'Pant', 'Hardik', 'Jadeja', 'Bumrah', 'Shami'];

  // Destructuring - Odd and Even team players
  const [first, second, third, fourth, ...rest] = team;
  const oddTeamPlayers = team.filter((_, index) => index % 2 === 0);
  const evenTeamPlayers = team.filter((_, index) => index % 2 !== 0);

  // Merge two arrays using spread operator (ES6 merge feature)
  const T20players = ['Rohit', 'Virat', 'Rahul'];
  const RanjiTrophyPlayers = ['Pujara', 'Rahane', 'Mayank'];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeamPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeamPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged T20 and Ranji Trophy Players</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
