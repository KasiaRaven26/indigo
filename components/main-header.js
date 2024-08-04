/** @format */

import MainHeaderBackground from "./main-header-background";
import indigoIcon from "@/assets/images/indigo-icon.png";
import Image from "next/image";

import classes from "./main-header.module.css";
import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground></MainHeaderBackground>
      <header>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/who-we-are">WHO WE ARE</Link>
            </li>
            <li>
              <Link href="/what-we-do">WHAT WE DO</Link>
            </li>
            <li>
              <Image src={indigoIcon} alt="alt" width={200} height={200} />
            </li>
            <li>
              <Link href="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link href="/contact-us">CONTACT</Link>
            </li>
          </ul>
        </nav>
        <div className={classes.heading}>
          <h1>GUIDING VISIONS, MANAGING REALITIIES</h1>
          <h1>YOUR PARTNER IN DEVELOPMENT, CONSULTING, AND MANAGEMENT</h1>
        </div>
      </header>
    </>
  );
}
