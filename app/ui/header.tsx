"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../icons/logo";
import Navbar from "./navbar";
import clsx from "clsx";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hamburgerColor, setHamburgerColor] = useState("white");

  const handleScroll = () => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px)").matches
    ) {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;

      if (scrollPercent > 25 && scrollPercent < 55) {
        setHamburgerColor("black");
      } else if (scrollPercent >= 55) {
        setHamburgerColor("white");
      } else {
        setHamburgerColor("white");
      }
    }
  };

  const controlHeader = () => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px)").matches
    ) {
      if (window.scrollY > lastScrollY) {
        // if scrolled down
        setShowHeader(false);
      } else {
        //if scrolled up
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={clsx(
        showHeader ? "translate-y-0" : "-translate-y-[100%]",
        "fixed w-full pt-7 px-6 transition-transfrom duration-[350ms] flex justify-between items-center top-0 z-40",
        "md:static md:pt-2 md:px-20 md:translate-y-0",
        "lg:px-[7rem] lg:pt-4",
        "xl:px-[10.3rem] xl:pt-6",
      )}
    >
      <div className="z-50">
        <Link href="/" aria-label="loop studios">
          <Logo
            className={clsx("w-[9rem]", "w-[12.1rem]")}
            fill={menuOpen ? "white" : hamburgerColor}
          />
        </Link>
      </div>
      <div>
        <Navbar
          isOpen={menuOpen}
          toggleMenu={setMenuOpen}
          hamburgerColor={hamburgerColor}
        />
      </div>
    </header>
  );
};

export default Header;
