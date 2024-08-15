import Link from "next/link";
import Logo from "../icons/logo";
import Facebook from "../icons/facebook";
import Instagram from "../icons/instagram";
import Twitter from "../icons/twitter";
import Pinterest from "../icons/pinterest";
import clsx from "clsx";

const Footer = () => {
  return (
    <footer
      className={clsx(
        "bg-black text-white flex flex-col items-center px-10 py-14",
        "md:flex-row md:justify-between md:items-start md:px-20 md:py-10",
        "lg:px-[7rem]",
        "xl:px-[10.3rem]",
      )}
    >
      <div>
        <Link href="">
          <Logo className="w-[9rem]" />
        </Link>
        <ul
          className={clsx(
            "text-center mt-8 flex flex-col items-center gap-[1.2rem] mb-12",
            "md:flex-row  md:mt-5 md:mb-4",
            "lg:flex-row  lg:mt-5 lg:mb-4",
          )}
        >
          <li className="w-fit relative before:absolute before:bottom-[-5px] before:bg-white before:h-[2px] before:w-full before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300">
            <Link href="">About</Link>
          </li>
          <li className="w-fit relative before:absolute before:bottom-[-5px] before:bg-white before:h-[2px] before:w-full before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300">
            <Link href="">Careers</Link>
          </li>
          <li className="w-fit relative before:absolute before:bottom-[-5px] before:bg-white before:h-[2px] before:w-full before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300">
            <Link href="">Events</Link>
          </li>
          <li className="w-fit relative before:absolute before:bottom-[-5px] before:bg-white before:h-[2px] before:w-full before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300">
            <Link href="">Products</Link>
          </li>
          <li className="w-fit relative before:absolute before:bottom-[-5px] before:bg-white before:h-[2px] before:w-full before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300">
            <Link href="">Support</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul
          className={clsx(
            "flex gap-4 justify-center items-center mb-5",
            "md:justify-end",
            "lg:justify-end",
          )}
        >
          <li className="w-fit relative before:absolute before:bottom-[-7px] before:bg-white before:h-[3px] before:w-full before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300">
            <Link href="">
              <Facebook />
            </Link>
          </li>
          <li className="w-fit relative before:absolute before:bottom-[-7px] before:bg-white before:h-[3px] before:w-full before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300">
            <Link href="">
              <Twitter />
            </Link>
          </li>
          <li className="w-fit relative before:absolute before:bottom-[-7px] before:bg-white before:h-[3px] before:w-full before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300">
            <Link href="">
              <Pinterest />
            </Link>
          </li>
          <li className="w-fit relative before:absolute before:bottom-[-7px] before:bg-white before:h-[3px] before:w-full before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300">
            <Link href="">
              <Instagram />
            </Link>
          </li>
        </ul>
        <p
          className={clsx(
            "text-sm text-center tracking-wide",
            "md:pl-12 md:text-right",
          )}
        >
          &copy; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
