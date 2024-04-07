"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainBackground from "./main-header-background";

function MainHeader() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <MainBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link
                href="/meals"
                className={pathname === "/meals" ? classes.active : ""}
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={pathname === "/community" ? classes.active : ""}
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
