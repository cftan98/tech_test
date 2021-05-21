import { useState } from 'react';
import image from './classic-tee.jpg';

const sizeBox = {
  border: 'solid 1px',
  width: "40px",
  height: '40px',
  textAlign: 'center',
  marginRight: '10px',
  cursor: 'pointer'
}

function App() {
  const [numOfItem, setNumOfItem] = useState(0);

  return (
    <div>
      <div
        style={{
          backgroundColor: '#F6F6F7'
        }}
      >
        <p style={{ marginLeft: '85%' }}>My Cart  ({numOfItem})</p>
      </div>

      <div
        style={{
          display: 'flex',
          marginTop: '5%',
        }}
      >
        <img src={image} style={{
          height: '600px',
          width: '400px',
          marginLeft: '20%',
        }} />

        <div
          style={{
            width: '500px',
            marginLeft: '10%'
          }}
        >
          <div
            style={{
              color: '#222222'
            }}
          >
            <h3>Classic tee</h3>
            <hr></hr>
            <p>$75.00</p>
            <hr></hr>
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

          <div>
            <p>SIZE:<span style={{ color: '#C90000' }}>*</span></p>
          </div>

          <div
            style={{ display: 'flex' }}
          >
            <div style={sizeBox}>
              <p style={{ marginTop: '8px' }}>S</p>
            </div>

            <div style={sizeBox}>
              <p style={{ marginTop: '8px' }}>M</p>
            </div>

            <div style={sizeBox}>
              <p style={{ marginTop: '8px' }}>L</p>
            </div>
          </div>

          <div
            style={{
              border: 'solid 3px',
              borderColor: 'black',
              marginTop: '20px',
              width: '170px',
              textAlign: 'center',
              paddingTop: '5px',
              paddingBottom: '5px'
            }}
          >
            ADD TO CART
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
