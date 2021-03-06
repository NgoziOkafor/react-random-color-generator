import { useState } from 'react';

function App() {
  const [hex, setHex] = useState('#ffffff');

  const randomizedHex = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setHex(randomColor);
  };

  return (
    <div
      className="Container"
      style={{
        backgroundColor: hex,
        minHeight: '35.34vh',
      }}
    >
      <div style={{ backgroundColor: hex }}>Generated Color: {hex}</div>

      <button onClick={randomizedHex}>Generate</button>
    </div>
  );
}

export default App;
