import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function App() {
  const [numOfItem, setNumOfItem] = useState(0);

  return (
    <div>
      <div
        style={{
          backgroundColor: '#F6F6F7'
        }}
      >
        <p style={{marginLeft: '85%'}}>My Cart  ({numOfItem})</p>
      </div>
    </div>
  );
}

export default App;
