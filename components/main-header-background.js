/** @format */
import classes from "./main-header-background.module.css";

import greeceImage from "@/assets/images/greece.jpg";
import Image from "next/image";

export default function MainHeaderBackground() {
  return (
    <div className={classes["header-background"]}>
      <Image src={greeceImage} alt="" fill></Image>
    </div>
  );
}
