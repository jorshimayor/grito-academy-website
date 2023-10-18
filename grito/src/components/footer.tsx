import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer id="footer" className="bg-[#080808] w-full h-[636px]">
        <div className=" w-full justify-center space-x-10 items-center flex flex-wrap ">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 pl-20 mt-[56px] ml-20 sm:flex-col">
            <div className="pl-20">
              <Image src="/logo.png" width={130} height={87} alt="logo" />

              <ul className="text-white font-[18px]">
                <li className="my-4">
                  <p>
                    Carrer Sicilia 190 1ero 2°,
                    <br />
                    08013, Ciudad de Barcelona,
                    <br />
                    Espana.
                  </p>
                </li>

                <li className="mb-4">
                  <p>Africa: +234 802 919 7097</p>

                  <p>Email: emeka@grito.africa</p>
                </li>

                <li className="mb-4">
                  <p>Europe: +346 310 385 88</p>

                  <p>Email: gustavo@grito.africa</p>
                </li>
              </ul>
            </div>

            <div className="pl-20">
              <h2 className="mb-6 text-[28px] font-semibold text-[#CBB26A] uppercase pt-2 ">
                OFFICE HOURS
              </h2>

              <ul className="text-white font-[18px]">
                <li className="my-10">
                  <p>9am - 4pm (Mon - Sat, WAT)</p>
                </li>

                <li className="my-20">
                  <button className="w-48 h-11 px-3 py-3 bg-[#080808] rounded-2xl border border-[#CBB26A] justify-center items-center gap-2 inline-flex">
                    <p className="text-[#CBB26A] text-lg font-semibold">
                      Chat With Us
                    </p>
                  </button>
                </li>
              </ul>
            </div>

            <div className="pl-20">
              <ul className="text-white font-[18px]">
                <li className="my-4">
                  <p className="text-center pt-10">
                    At GRITO Talent Factory, our motto says, ‘Never Waste
                    Talent’. We take African Tech talents one step closer to
                    their dream tech jobs with top European Companies.
                  </p>
                </li>

                <div className="flex my-20 justify-center items-center gap-5">
                  <li className="mb-4">
                    <Link href="https://www.youtube.com/@gritotalentagency">
                      <Image
                        src="/youtube.png"
                        alt="youtube"
                        width={40}
                        height={40}
                      />
                    </Link>
                  </li>

                  <li className="mb-4">
                    <Link href="https://www.linkedin.com/company/grito-talent-agency">
                      <Image
                        src="/linkedin.png"
                        alt="linkedin"
                        width={40}
                        height={40}
                      />
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <p className="flex text-center text-white justify-center items-center md:flex md:items-center md:justify-center">
          © ALL RIGHTS RESERVED {currentYear} | GRITO TALENT FACTORY
        </p>
      </footer>
    </div>
  );
};

export default Footer;
