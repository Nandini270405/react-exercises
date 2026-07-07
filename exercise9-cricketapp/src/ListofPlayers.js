function ListofPlayers() {
  const players = [
    { name: 'Rohit Sharma', score: 85 },
    { name: 'Virat Kohli', score: 92 },
    { name: 'KL Rahul', score: 45 },
    { name: 'Rishabh Pant', score: 60 },
    { name: 'Hardik Pandya', score: 75 },
    { name: 'Ravindra Jadeja', score: 55 },
    { name: 'Jasprit Bumrah', score: 20 },
    { name: 'Mohammed Shami', score: 15 },
    { name: 'Shubman Gill', score: 88 },
    { name: 'Suryakumar Yadav', score: 68 },
    { name: 'Yuzvendra Chahal', score: 10 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
