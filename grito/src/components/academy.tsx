import Image from "next/image";
import Link from "next/link";

const Academy = () => {
  return (
    <div id="academy" className="sm:w-screen simple-blended">
      <div className="md:flex md:flex-col h-[636px] md:items-center px-4 md:justify-center">
        <h1 className="text-center text-[#CBB26A] text-[32px] ">
          WHY YOU SHOULD ENROLL AT GRITO ACADEMY?
        </h1>

        <div className="md:flex md:justify-center md:items-center gap-10 my-10 md:pt-5">
          <div className="md:flex md:flex-col md:gap-10">
            <div className="flex gap-5">
              <div>
                <Image src="/book.png" width={30} height={30} alt="book" />
              </div>

              <p className="md:text-justify text-white">
                Learn in milestones at your own pace and build your first <br />
                software product within 60 days with Your Expert Tech Guide.{" "}
                <br />
              </p>
            </div>

            <div className="flex gap-5">
              <div>
                <Image src="/book.png" width={30} height={30} alt="book" />
              </div>

              <p className="text-justify text-white">
                Enroll at GRITO Academy on our flexible payment plans and <br />
                win bonuses on referrals
              </p>
            </div>
          </div>

          <div className="md:flex md:justify-center md:items-center md:flex-col md:gap-10">
            <div className="flex gap-5">
              <div>
                <Image src="/book.png" width={30} height={30} alt="book" />
              </div>

              <p className="md:text-justify text-white">
                Learn HTML, CSS and Javascript in your African local <br />
                dialect.
              </p>
            </div>

            <div className="flex gap-5 pl-3 pt-4">
              <div>
                <Image src="/book.png" width={30} height={30} alt="book" />
              </div>

              <p className="md:text-justify text-white ">
                Join our Virtual Internship Program (VIP) to prepare for <br />
                your dream tech job.
              </p>
            </div>
          </div>
        </div>

        <button className="md:w-64 hover:scale-105 hover:text-gold md:h-11 md:px-3 py-3 bg-[#080808] rounded-2xl border border-[#CBB26A] md:justify-center md:items-center md:gap-2 md:inline-flex">
          <p className="text-white text-lg font-semibold">
            Click To Get Started
          </p>
        </button>
      </div>
    </div>
  );
};

export default Academy;
