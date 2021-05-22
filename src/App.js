import { useState } from 'react';
import { Divider, Menu, Dropdown, Space } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import image from './classic-tee.jpg';

// Dummy data
const menu = (
  <Menu>
    <Menu.Item>
      <a>
        <>
          <Space align='start'>
            <img src={image} height={150} width={100} />
            <div>
              <p>Classic tee</p>
              <span>1 * <b>$75.00</b></span>
              <p>Size: S</p>
            </div>
          </Space>
        </>
      </a>
    </Menu.Item>
  </Menu>
);

function App() {
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
        <Dropdown overlay={menu} placement='bottomRight'>
          <div className='CART'>
            <ShoppingCartOutlined id={"CART_ICON"} size={10} />
            <p
              id='CART'
              //className='CART'
            >
              My Cart  (1)
            </p>
          </div>
        </Dropdown>
      </div>

      <div
        // main container component
        id="MAIN"
      >
        <img
          // Lefthandside component
          id="LHS"
          src={image}
        />

        <div
          // Righthandside component
          id="RHS"
        >
          <div
            id="TITLE"
            style={{
              color: '#222222'
            }}
          >
            <h3>Classic tee</h3>
            <Divider className="divider" />
            <p id='PRICE'>$75.00</p>
            <Divider className="divider" />
          </div>

          <p id="DESCRIP">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

          <div>
            <p id='SIZE'>SIZE:<span style={{ color: '#C90000' }}>*</span>  <span style={{ color: 'black' }}>{selectSize}</span></p>
          </div>

          <div
            id="BOX_CONTAINER"
          >
            <div id='S' className='box' onClick={() => handleChangeBox("S")}>
              <p style={{ marginTop: '8px' }}>S</p>
            </div>

            <div id='M' className='box' onClick={() => handleChangeBox("M")}>
              <p style={{ marginTop: '8px' }}>M</p>
            </div>

            <div id='L' className='box' onClick={() => handleChangeBox("L")}>
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
