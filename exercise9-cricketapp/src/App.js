import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const flag = false; // change to true to see ListofPlayers instead

  return (
    <div>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;