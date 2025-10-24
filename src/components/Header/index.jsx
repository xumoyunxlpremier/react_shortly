import { useState } from "react";
import style from "./header.module.css";

export default function Header() {
    
    const [menuOpen, setMenuOpen] = useState(false);

    
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.header__container}>
                    <div className={style.header__containertop}>
                        {/* Logo */}
                        <div className={style.logo}>
                            <a href="#" className={style.logolink}>Shortly</a>
                        </div>

                        {/* Navigation */}
                        <nav className={style.nav}>
                            <ul
                                className={`${style.navlinks} ${menuOpen ? style.active : ""}`}
                            >
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Resources</a></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Registration */}
                    <div
                        className={`${style.registration} ${menuOpen ? style.active : ""}`}
                    >
                        <a href="#" className={style.login}>Login</a>
                        <a href="#" className={style.sign}>Sign Up</a>
                    </div>

                    {/* Hamburger */}
                    <button
                        className={`${style.hamburger} ${menuOpen ? style.active : ""}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
2