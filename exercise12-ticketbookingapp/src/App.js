import { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';
import LoginControl from './LoginControl';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  return (
    <div>
      <h1>Ticket Booking App</h1>
      <LoginControl
        isLoggedIn={isLoggedIn}
        onLoginClick={handleLoginClick}
        onLogoutClick={handleLogoutClick}
      />
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;