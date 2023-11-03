import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer id="contact" className="bg-black1 w-fit h-fit mx-auto">
        <div className="md:w-full justify-between space-x-[50px] items-center flex flex-wrap max-sm:flex-col max-sm:items-center max-sm:w-screen max-sm:justify-center">
          <div className="md:grid md:gap-[100px] md:py-6 lg:py-8 md:grid-cols-5 md:mx-12 md:mt-[56px]">
            <div className="md:">
              <Image
                src="/logo.png"
                width={130}
                height={87}
                alt="logo"
                className="max-sm:hidden"
              />

              <ul className="text-white font-[18px]">
                <li className="md:my-4">
                  <p>
                    Carrer Sicilia 190 1ero 2°, 08013, Ciudad de Barcelona,
                    Espana.
                  </p>
                </li>

                <li className="md:mb-4">
                  <p>Europe: +346 310 385 88</p>

                  <p>Email: gustavo@grito.africa</p>
                </li>

                <li className="md:mb-4">
                  <p>Africa: +234 802 919 7097</p>

                  <p>Email: emeka@grito.africa</p>
                </li>
              </ul>
            </div>

            <div className="w-[378.01px] h-[0px] -rotate-90 md:-ml-[100px] border md:mt-[190px] border-gold"></div>

            <div className="">
              <h2 className="md:mb-6 text-[25px] text-center  font-semibold text-[#CBB26A] uppercase pt-3">
                OFFICE HOURS
              </h2>

              <ul className="text-white font-[10px]">
                <li className="my-10">
                  <p className="text-center">
                    9am - 4pm <br /> (Mon - Sat, WAT)
                  </p>
                </li>

                <li className="md:my-20">
                  <button className="w-48 h-11 py-3 bg-[#080808] hover:scale-105 hover:text-gold rounded-2xl border border-[#CBB26A] justify-center items-center inline-flex">
                    <p className="text-[#CBB26A] text-lg font-semibold">
                      Chat With Us
                    </p>
                  </button>
                </li>
              </ul>
            </div>

            <div className="w-[378.01px] h-[0px] -rotate-90 md:-ml-10 border md:mt-[190px] border-gold"></div>

            <div className="md:">
              <ul className="text-white font-[18px]">
                <li className="md:my-4">
                  <p className="md:text-center pt-10">
                    At GRITO Talent Factory, our motto says, ‘Never Waste
                    Talent’. We take African Tech talents one step closer to
                    their dream tech jobs with top European Companies.
                  </p>
                </li>

                <li className="md:flex my-20 justify-center items-center gap-5">
                  <div className="md:mb-4">
                    <Link href="https://www.youtube.com/@gritotalentagency">
                      <Image
                        src="/youtube.png"
                        alt="youtube"
                        width={40}
                        height={40}
                        className="hover:scale-105"
                      />
                    </Link>
                  </div>

                  <div className="md:mb-4">
                    <Link href="https://www.linkedin.com/company/grito-talent-agency">
                      <Image
                        src="/linkedin.png"
                        alt="linkedin"
                        width={40}
                        height={40}
                        className="hover:scale-105"
                      />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="flex text-center text-white justify-center items-center">
          © ALL RIGHTS RESERVED {currentYear} | GRITO TALENT FACTORY
        </p>
      </footer>
    </div>
  );
};

export default Footer;
