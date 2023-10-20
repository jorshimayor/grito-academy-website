import Image from "next/image";
import Link from "next/link";
import React from "react";

const Academy = () => {
  return (
    <div id="academy">
      <div className="flex flex-col h-[476px] items-center justify-center w-full simple-blended">
        <h1 className="text-center text-[#CBB26A] text-[32px]">
          WHY YOU SHOULD ENROLL AT GRITO ACADEMY?
        </h1>

        <div className="flex justify-center items-center gap-10 my-10 pt-5">
          <div className="flex flex-col gap-10">
            <div className="flex gap-5">
              <div>
                <Image src="/book.png" width={30} height={30} alt="book" />
              </div>

              <p className="text-justify text-white">
                Learn in milestones at your own pace and build your <br />
                first software product within 60 days with Your Expert <br />
                Tech Guide.
              </p>
            </div>

            <div className="flex gap-5">
              <div>
                <Image src="/book.png" width={30} height={30} alt="book" />
              </div>

              <p className="text-justify text-white">
                Enroll at GRITO Academy on our flexible payment <br />
                plans and win bonuses on referrals
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col gap-10">
            <div className="flex gap-5">
              <div>
                <Image src="/book.png" width={30} height={30} alt="book" />
              </div>

              <p className="text-justify text-white">
                Learn HTML, CSS and Javascript in your African local <br />
                dialect.
              </p>
            </div>

            <div className="flex gap-5 pl-3 pt-4">
              <div>
                <Image src="/book.png" width={30} height={30} alt="book" />
              </div>

              <p className="text-justify text-white ">
                Join our Virtual Internship Program (VIP) to prepare for <br />
                your dream tech job.
              </p>
            </div>
          </div>
        </div>

        <button className="w-64 h-11 px-3 py-3 bg-[#080808] rounded-2xl border border-[#CBB26A] justify-center items-center gap-2 inline-flex">
          <p className="text-white text-lg font-semibold">
            Click To Get Started
          </p>
        </button>
      </div>
    </div>
  );
};

export default Academy;
