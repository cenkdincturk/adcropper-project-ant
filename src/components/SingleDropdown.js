import React from "react";
import { Menu, Dropdown, Button, message } from "antd";
import "./SingleDropdown.css";
const card1 = require("../assets/card1.png");
const card2 = require("../assets/card2.png");
const card3 = require("../assets/card3.png");


function SingleDropdown() {

  const handleMenuClick = ({ key }) => {
    message.info(`Click Option ${key}`);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </Menu>
  );

  return (
    <div className="singledropdown">
      <Dropdown overlay={menu}>
        <Button className="button-color">
          Dropdown
        </Button>
      </Dropdown>

    </div>
  );
}

export default SingleDropdown;
