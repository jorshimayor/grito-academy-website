import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div id="home" className="h-fit w-fit md:flex flex-wrap max-sm:mx-auto">
      <div className="md:w-2/5 pt-[200px] md:pl-[50px] mx-auto px-5">
        <div className="animate-fade-right animate-duration-1500 animate-delay-100 animate-fill-forwards">
          <div>
            <span className="text-gold text-7xl font-semibold tracking-widest">
              Hire
            </span>

            <span className="text-gold text-7xl font-semibold tracking-widest pl-8">
              African
            </span>
          </div>

          <div className="pt-5 animate-fade-left animate-duration-[1500ms] animate-delay-100 animate-ease-in-out">
            <span className="text-gold text-7xl font-semibold tracking-widest max-sm:text-6xl">
              Tech Talents!
            </span>
          </div>

          <div className="animate-fade-right animate-duration-[2000ms] animate-delay-100 animate-ease-in-out animate-fill-forwards">
            <p className="bg-gradient-to-r from-amber-400 via-zinc-100 to-yellow-400 bg-clip-text text-transparent pt-[80px] text-2xl font-normal">
              Vetted Quality and Affordable Rates
            </p>

            <p className="bg-gradient-to-r from-amber-400 via-zinc-100 to-yellow-400 bg-clip-text text-transparent pt-[44px] text-2xl font-normal">
              Flexible Timezones
            </p>

            <p className="bg-gradient-to-r from-amber-100 via-yellow-400 to-yellow-200 bg-clip-text text-transparent pt-[44px] text-2xl font-normal">
              Negotiable Work Plan
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-3/5">
        <div className="flex justify-center items-center flex-wrap max-sm:flex-col mt-10">
          <div className="flex mt-10 items-center">
            <div className="max-sm:absolute max-sm:items-center max-sm:justify-center">
              <div className="w-80 h-80 animate-fade-right animate-duration-[1700ms] animate-delay-200 animate-ease-in-out animate-fill-forwards bg-black1 rounded-2xl border-2 border-gold ">
                <p className="text-white text-base text-justify pt-5 pl-5 font-semibold">
                  Hi, I’m Gustavo, founder at GRITO <br /> talent factory.....
                </p>

                <div className="flex items-center justify-center pt-10">
                  <video
                    src="/grivid.mp4"
                    muted
                    autoPlay
                    loop
                    className="aspect-video bg-cover"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/lady.png"
                width={300}
                height={300}
                alt="lady"
                className="-translate-x-10 z-30 animate-fade-down animate-duration-[1700ms] animate-delay-200 animate-ease-in-out animate-fill-forwards absolute max-sm:hidden"
              />

              <div className="flex flex-col w-80 h-80 relative animate-fade-up animate-duration-[1700ms] animate-delay-200 animate-ease-in-out animate-fill-forwards mt-20 pt-20">
                <Image
                  src="/Vector.png"
                  width={428.405}
                  height={467.908}
                  alt="Vector"
                  className=" z-10 absolute -translate-x-6 max-sm:hidden"
                />

                <Image
                  src="/Vector1.png"
                  width={428.405}
                  height={467.908}
                  alt="Vector1"
                  className=" z-0 absolute max-sm:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1330px] my-20 mx-auto h-[0px] border border-stone-600 max-sm:w-[500px] max-sm:h-0 max-sm:mb-5"></div>{" "}
    </div>
  );
};

export default Header;
