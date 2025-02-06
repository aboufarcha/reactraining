import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full md:py-16 sm:py-14 py-10 md:px-6 sm:px-5 px-4 spacy-y-10">
      <div className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-1 items-start gap-7">
        <div className="col-span-1 space-y-3">
          <h6 className="text-sm text-neutral-50 font-semibold tracking-wide">
            Company
          </h6>
          <ul className="space-y-2.5 text-sm text-neutral-400">
            <li>
              <Link
                to={"/"}
                className="hover:text-neutral-50 hover:underline ease-in-out duration-75"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="hover:text-neutral-50 hover:underline ease-in-out duration-75"
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="hover:text-neutral-50 hover:underline ease-in-out duration-75"
              >
                Jobs
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 space-y-3">
          <h6 className="text-sm text-neutral-50 font-semibold tracking-wide">
            Communities
          </h6>
          <ul className="space-y-2.5 text-sm text-neutral-400">
            <li>
              <Link
                to={"/"}
                className="hover:text-neutral-50 hover:underline ease-in-out duration-75"
              >
                For Artists
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="hover:text-neutral-50 hover:underline ease-in-out duration-75"
              >
                Developers
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="hover:text-neutral-50 hover:underline ease-in-out duration-75"
              >
                Advertising
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 space-y-3">
          <h6 className="text-sm text-neutral-50 font-semibold tracking-wide">
            Usefull Link
          </h6>
          <ul className="space-y-2.5 text-sm text-neutral-400">
            <li>
              <Link
                to={"/"}
                className="hover:text-neutral-50 hover:underline ease-in-out duration-75"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="hover:text-neutral-50 hover:underline ease-in-out duration-75"
              >
                Free Mobile App
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 space-y-3">
          <h6 className="text-sm text-neutral-50 font-semibold tracking-wide">
            Spotify Plans
          </h6>
          <ul className="space-y-2.5 text-sm text-neutral-400">
            <li>
              <Link
                to={"/"}
                className="hover:text-neutral-50 hover:underline ease-in-out duration-75"
              >
                Premium Individual
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="hover:text-neutral-50 hover:underline ease-in-out duration-75"
              >
                Premium Duo
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="hover:text-neutral-50 hover:underline ease-in-out duration-75"
              >
                Premium Family
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 space-y-3"></div>
      </div>
      <div className="w-full h-[1px] bg-neutral-700/40"></div>
      <p className="text-sm text-neutral-400 font-normal">
        &copy; 2024 Spotify AB
      </p>
    </div>
  );
};

export default Footer;
