import Header from "./ui/header";
import Footer from "./ui/footer";
import Image from "next/image";
import { data } from "./lib/data";
import clsx from "clsx";

export default function Home() {
  return (
    <>
      <div
        className={clsx(
          "py-10 text-white h-[40.5rem] bg-hero-mobile bg-cover bg-center",
          "md:bg-hero-desktop",
        )}
      >
        <h1 className="sr-only">Loop studios home</h1>
        <Header />
        <div
          className={clsx(
            "px-6",
            "md:px-20",
            "lg:px-[7rem]",
            "xl:px-[10.3rem]",
          )}
        >
          <p
            className={clsx(
              "uppercase text-[2.47rem] tracking-[0.011em] leading-[2.45rem] font-josefin mt-[10.1rem] pb-[1rem] pt-[1.5rem] px-[1.45rem] border-2 border-white",
              "md:max-w-[30rem] md:text-[2.8rem] md:leading-[2.95rem]",
              "lg:max-w-[40.8rem] lg:text-[4.35rem] lg:tracking-[0.014em] lg:leading-[4.35rem] lg:px-10 lg:pt-10 lg:pb-8 lg:mt-[8rem]",
            )}
          >
            Immersive experiences that deliver
          </p>
        </div>
      </div>
      <main
        className={clsx(
          "flex flex-col items-center py-[6.1rem] px-6 font-alata text-darkGray-100",
          "md:items-start md:px-20",
          "lg:py-[10rem] lg:px-[7rem]",
          "xl:px-[10.3rem]",
        )}
      >
        <div className={clsx("w-full md:relative md:mb-[8.6rem]")}>
          <div
            className={clsx(
              "relative w-full h-[14rem] mb-12",
              "md:w-[60%] md:h-[16rem]",
              "lg:w-[62%] lg:h-[30rem]",
              "xl:w-[66%] xl:h-[31.4rem]",
            )}
          >
            <Image
              src="/images/mobile/image-interactive.jpg"
              alt="man wearing virtual reality headset"
              fill
              className="lg:hidden"
            />
            <Image
              src="/images/desktop/image-interactive.jpg"
              alt="man wearing virtual reality headset"
              fill
              className="hidden lg:block"
            />
          </div>
          <div
            className={clsx(
              "text-center",
              "md:absolute md:w-[55%] md:top-20 md:right-0 md:bg-white md:text-left md:pt-10 md:pl-10",
              "lg:w-[48.5%] lg:top-[11.6rem] lg:py-20 lg:pl-20",
              "xl:py-24 xl:pl-24",
            )}
          >
            <h2
              className={clsx(
                "font-josefin uppercase text-[2rem] leading-8 mb-4 text-black",
                "lg:text-4xl lg:mb-[1.5rem]",
                "xl:text-5l",
              )}
            >
              The leader in interactive VR
            </h2>
            <p className={clsx("mb-24 leading-[1.67] px-4", "md:px-0 md:mb-0")}>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
        <div
          className={clsx(
            "w-full flex flex-col items-center",
            "md:grid md:grid-col-2 md:gap-y-10 md:justify-between md:items-center md:w-full",
            "lg:gap-y-[5rem]",
          )}
        >
          <h2
            className={clsx(
              "uppercase text-[2rem] leading-8 mb-12 font-josefin text-black",
              "md:row-start-1 md:col-start-1 md:mb-0",
              "lg:text-4xl",
              "xl:text-5xl",
            )}
          >
            Our creations
          </h2>
          <ul
            className={clsx(
              "w-full grid grid-rows-1 gap-y-6 font-josefin mb-8",
              "md:grid-cols-2 md:gap-x-6 md:col-span-2",
              "lg:grid-cols-4 lg:gap-x-8",
            )}
          >
            {data.map((elem, idx) => (
              <li
                key={idx}
                className={clsx(
                  "relative w-full h-[7.5rem] before:z-10 before:absolute before:w-full before:h-full before:bg-gradient-to-r from-slate-800/50 from-5% to-transparent to-50%",
                  "md:h-[27rem]",
                  "lg:h-[28.1rem]",
                )}
              >
                <p
                  className={clsx(
                    "uppercase text-2xl leading-6 text-white z-20 absolute left-5 bottom-5 w-[35%]",
                    "lg:bottom-4 lg:left-4 lg:text-[1.55rem] lg:leading-[1.2] lg:w-[75%]",
                    "xl:bottom-8 xl:left-9 xl:text-[1.95rem] xl:leading-[1.2] xl:w-[75%]",
                  )}
                >
                  {elem.name}
                </p>
                <Image
                  src={elem.mobileImage}
                  alt={elem.alt}
                  fill
                  className="md:hidden z-[1]"
                />
                <Image
                  src={elem.desktopImage}
                  alt={elem.alt}
                  fill
                  className="hidden md:block"
                />
              </li>
            ))}
          </ul>
          <button
            className={clsx(
              "uppercase border border-black px-10 py-2 text-base text-black tracking-[0.2em] transition-colors duration-300 hover:bg-black hover:text-white",
              "md:row-start-1 md:col-start-2 md:px-5 md:py-1",
              "lg:px-7 lg-py-1",
              "xl:px-10 xl-py-2",
            )}
          >
            see all
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
