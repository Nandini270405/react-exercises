function Welcome() {
  const sayWelcome = (name) => {
    alert('Welcome, ' + name + '!');
  };

  return (
    <div>
      <button onClick={() => sayWelcome('welcome')}>Say Welcome</button>
    </div>
  );
}

export default Welcome;