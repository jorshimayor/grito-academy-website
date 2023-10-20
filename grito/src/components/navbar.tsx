import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-[#080808] h-[87px] border-gray-200 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="#home" className="flex items-start -ml-20">
            <Image
              src="/logo.png"
              className=""
              width={130}
              height={87}
              alt="Grito Logo"
            />
          </Link>

          <div className="hidden w-full md:block md:w-auto">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link
                  href="#home"
                  className="block py-2 pl-3 pr-4 text-[#CBB26A] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-[#CBB26A] md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="#hire"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#CBB26A] md:p-0 dark:text-white md:dark:hover:text-[#CBB26A] dark:hover:bg-gray-700 dark:hover:text-[#CBB26A] md:dark:hover:bg-transparent"
                >
                  Hire Talents
                </Link>
              </li>

              <li>
                <Link
                  href="#academy"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#CBB26A] md:p-0 dark:text-white md:dark:hover:text-[#CBB26A] dark:hover:bg-gray-700 dark:hover:text-[#CBB26A] md:dark:hover:bg-transparent"
                >
                  GRITO Academy
                </Link>
              </li>

              <li>
                <Link
                  href="#footer"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#CBB26A] md:p-0 dark:text-white md:dark:hover:text-[#CBB26A] dark:hover:bg-gray-700 dark:hover:text-[#CBB26A] md:dark:hover:bg-transparent"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
