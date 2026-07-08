function SyntheticEventExample() {
  const handlePress = (event) => {
    alert('I was clicked');
    console.log('Synthetic event type:', event.type);
  };

  return (
    <div>
      <button onClick={handlePress}>OnPress</button>
    </div>
  );
}

export default SyntheticEventExample;