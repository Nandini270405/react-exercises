function UserPage() {
  const flights = [
    { id: 1, from: 'Delhi', to: 'Mumbai', time: '08:00 AM' },
    { id: 2, from: 'Bangalore', to: 'Chennai', time: '11:30 AM' },
    { id: 3, from: 'Kolkata', to: 'Hyderabad', time: '02:15 PM' }
  ];

  const bookTicket = (flight) => {
    alert('Ticket booked: ' + flight.from + ' → ' + flight.to);
  };

  return (
    <div>
      <h2>Available Flights (User View)</h2>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            {flight.from} → {flight.to} at {flight.time}
            <button onClick={() => bookTicket(flight)} style={{ marginLeft: '10px' }}>
              Book Ticket
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;