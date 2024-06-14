'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from "@/assets/logo.png";
import classes from "./header.module.css";
import Image from 'next/image'; //For optimization like lazy loading and automaticcally extract image by logo.src and different srcset 
import HeaderBg from '../NavbarBg/HeaderBg';

const Header = () => {
    const path = usePathname();
    return (
        <>
            <HeaderBg />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logo} alt="A plate with food on it" priority />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link className={`${classes.navLink} ` + `${path == '/meals' ? classes.active : ""}`} href="/meals">Browse Meals</Link>
                        </li>
                        <li>
                            <Link className={`${classes.navLink} ` + `${path == '/community' ? classes.active : ""}`} href="/community">Foodies Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;