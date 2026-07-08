function App() {
  const officeList = [
    { name: 'Skyline Business Hub', rent: 45000, address: 'MG Road, Bangalore', image: 'https://via.placeholder.com/200x150?text=Office+1' },
    { name: 'Metro Corporate Center', rent: 75000, address: 'Connaught Place, Delhi', image: 'https://via.placeholder.com/200x150?text=Office+2' },
    { name: 'Greenview Workspace', rent: 55000, address: 'Salt Lake, Kolkata', image: 'https://via.placeholder.com/200x150?text=Office+3' },
    { name: 'Prime Tower Offices', rent: 90000, address: 'Bandra Kurla Complex, Mumbai', image: 'https://via.placeholder.com/200x150?text=Office+4' }
  ];

  return (
    <div>
      <h1>Office Space Rental Listings</h1>

      {officeList.map((office, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: '15px', padding: '10px' }}>
          <img src={office.image} alt={office.name} />
          <h2>{office.name}</h2>
          <p>Address: {office.address}</p>
          <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
            Rent: ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;