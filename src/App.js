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
  const [selectSize, setSize] = useState("");

  const handleChangeBox = (value) => {
    resetBoxStyle();
    if (value === selectSize) {
      setSize("");
    } else {
      setSize(value);
      document.getElementById(value).style.border = "solid 2px";
      document.getElementById(value).style.borderColor = 'black';
    }

  }

  const resetBoxStyle = () => {
    const elements = document.getElementsByClassName('box');
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.border = 'solid 1px';
      elements[i].style.borderColor = 'gray';
    }
  }

  return (
    <div>
      <div
        className='Header'
      >
        <p style={{ marginLeft: '85%', fontSize: 'small' }}>My Cart  ({numOfItem})</p>
      </div>

      <div
        // main container
        style={{
          display: 'flex',
          marginTop: '5%',
        }}
      >
        <img
          src={image}
          style={{
            height: '600px',
            width: '400px',
            marginLeft: '20%',
          }}
        />

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
            <p>SIZE:<span style={{ color: '#C90000' }}>*</span>  <span style={{ color: 'black' }}>{selectSize}</span></p>
          </div>

          <div
            style={{ display: 'flex' }}
          >
            <div id='S' className='box' style={sizeBox} onClick={() => handleChangeBox("S")}>
              <p style={{ marginTop: '8px' }}>S</p>
            </div>

            <div id='M' className='box' style={sizeBox} onClick={() => handleChangeBox("M")}>
              <p style={{ marginTop: '8px' }}>M</p>
            </div>

            <div id='L' className='box' style={sizeBox} onClick={() => handleChangeBox("L")}>
              <p style={{ marginTop: '8px' }}>L</p>
            </div>
          </div>

          <div
            id="add_cart_button"
          >
            ADD TO CART
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
