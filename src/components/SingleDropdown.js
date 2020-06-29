import React, { useState } from "react";
import { Menu, Dropdown, Button, message, Row, Col } from "antd";
import "./SingleDropdown.css";
const card1 = require("../assets/card1.png");
const card2 = require("../assets/card2.png");
const card3 = require("../assets/card3.png");
const cards = { card1, card2, card3 };

function SingleDropdown() {
  const [change, setChange] = useState(cards.card1);

  const handleMenuClick = ({ key }) => {
    message.info(`Click Option ${key}`);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" onClick={() => setChange(cards.card1)}>
        Option 1
      </Menu.Item>
      <Menu.Item key="2" onClick={() => setChange(cards.card2)}>
        Option 2
      </Menu.Item>
      <Menu.Item key="3" onClick={() => setChange(cards.card3)}>
        Option 3
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="singledropdown">
      <Dropdown overlay={menu}>
        <Button className="button-color">Dropdown</Button>
      </Dropdown>

      <Row>
        <Col span={12} offset={6}>
          <img src={change} alt="cards" style={{width: "10rem"}}/>
        </Col>
      </Row>
    </div>
  );
}

export default SingleDropdown;
