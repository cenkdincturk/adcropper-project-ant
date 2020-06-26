import React from "react";
import { Menu, Dropdown, Button, message } from "antd";
import "./SingleDropdown.css"

function SingleDropdown() {

  function handleMenuClick(e) {
    message.info("Image showed");
    console.log("click", e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        Option 1
      </Menu.Item>
      <Menu.Item key="2">
        Option 2
      </Menu.Item>
      <Menu.Item key="3">
        Option 3
      </Menu.Item>
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
