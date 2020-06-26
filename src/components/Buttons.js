import React from "react";
import { Button, Col} from "antd";
import "antd/dist/antd.css";
import styles from "./Buttons.module.css"


function Buttons() {
  return (
    <div>
      <Button className={styles.button1} type="dark">Button</Button>
      <Button className={styles.button2}>Button</Button>
    </div>
  )
}

export default Buttons

