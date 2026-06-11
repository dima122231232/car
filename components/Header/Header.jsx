"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

import "./Header.css"

const Header = () => {
    useEffect(() => {
        gsap.fromTo(".header",{y: -100,},{y: 0,duration: 1,ease: "power3.out",});
    }, []);
    return (
        <header className="header">
            <div className="header__inner">
                <a href="#"><img src="/logo.svg" alt="logo" className="header__logo" /></a>

                <nav>
                <ul className="header__list">
                    <a href="#"><li className="header__item">Platform</li></a>
                    <a href="#"><li className="header__item">Features</li></a>
                    <a href="#"><li className="header__item">For Dealers</li></a>
                </ul>
                </nav>

                <button className="header__button">Sign In</button>
            </div>
        </header>
    );
};

export default Header;