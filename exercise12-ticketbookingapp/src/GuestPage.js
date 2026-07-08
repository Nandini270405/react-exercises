function GuestPage() {
  const flights = [
    { id: 1, from: 'Delhi', to: 'Mumbai', time: '08:00 AM' },
    { id: 2, from: 'Bangalore', to: 'Chennai', time: '11:30 AM' },
    { id: 3, from: 'Kolkata', to: 'Hyderabad', time: '02:15 PM' }
  ];

  return (
    <div>
      <h2>Available Flights (Guest View)</h2>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>{flight.from} → {flight.to} at {flight.time}</li>
        ))}
      </ul>
      <p>Please login to book a ticket.</p>
    </div>
  );
}

export default GuestPage;

