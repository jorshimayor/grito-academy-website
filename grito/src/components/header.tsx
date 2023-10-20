import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="h-[900px] w-full flex flex-wrap">
      <div className="w-2/5 pt-[200px] pl-[50px]">
        <div>
          <span className="text-[#CBB26A] text-7xl font-semibold tracking-widest">
            Hire
          </span>

          <span className="text-[#CBB26A] text-7xl font-semibold tracking-widest pl-8">
            African
            <br />
          </span>

          <div className="pt-5">
            <span className="text-[#CBB26A] text-7xl font-semibold tracking-widest">
              Tech Talents!
            </span>
          </div>

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

      <div className="w-3/5 ">
        <div className="flex justify-center items-center ">
          <div className="flex mt-10 items-center ">
            <div className="w-80 h-80 bg-zinc-950 rounded-2xl border-2 border-[#CBB26A]">
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

            <div className="relative">
              <Image
                src="/lady.png"
                width={300}
                height={300}
                alt="lady"
                className="-translate-x-10 z-30 absolute"
              />

              <div className="flex flex-col w-80 h-80 relative mt-20 pt-20">
                <Image
                  src="/Vector.png"
                  width={300}
                  height={300}
                  alt="Vector"
                  className=" z-10 absolute -translate-x-6 "
                />

                <Image
                  src="/Vector1.png"
                  width={300}
                  height={300}
                  alt="Vector1"
                  className=" z-0 absolute"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
