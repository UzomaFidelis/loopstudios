"use client";

import { useEffect } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";
import clsx from "clsx";

const Navbar = ({
  isOpen,
  toggleMenu,
  hamburgerColor,
}: {
  isOpen: boolean;
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  hamburgerColor: string;
}) => {
  //Disable scrolling whem menu is open of mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <nav>
      <button className="z-50 relative md:hidden">
        <Hamburger
          toggled={isOpen}
          toggle={toggleMenu}
          color={!isOpen ? hamburgerColor : "white"}
        />
      </button>
      <ul
        className={clsx(
          isOpen ? "translate-x-0" : "translate-x-full",
          "bg-black fixed top-0 left-0 h-screen w-full transition-transform duration-300 uppercase font-josefin pl-6 flex flex-col gap-4 justify-center text-2xl",
          "md:static md:translate-x-0 md:flex-row md:w-fit md:h-fit md:text-lg md:left-auto md:top-auto md:pl-0 md:bg-transparent md:capitalize md:font-alata",
          "lg:text-base lg:gap-[1.9rem]",
        )}
      >
        <Link
          href=""
          className={clsx(
            "w-fit relative",
            " before:absolute before:bottom-[-7px] before:bg-white before:h-[3px] before:w-full before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300",
          )}
        >
          <li>About</li>
        </Link>
        <Link
          href=""
          className={clsx(
            "w-fit relative",
            " before:absolute before:bottom-[-7px] before:bg-white before:h-[3px] before:w-full before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300",
          )}
        >
          <li>Careers</li>
        </Link>
        <Link
          href=""
          className={clsx(
            "w-fit relative",
            " before:absolute before:bottom-[-7px] before:bg-white before:h-[3px] before:w-full before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300",
          )}
        >
          <li>Events</li>
        </Link>
        <Link
          href=""
          className={clsx(
            "w-fit relative",
            " before:absolute before:bottom-[-7px] before:bg-white before:h-[3px] before:w-full before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300",
          )}
        >
          <li>Products</li>
        </Link>
        <Link
          href=""
          className={clsx(
            "w-fit relative",
            " before:absolute before:bottom-[-7px] before:bg-white before:h-[3px] before:w-full before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300",
          )}
        >
          <li>Support</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
