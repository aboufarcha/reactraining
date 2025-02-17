import { GoChevronRight, GoHome } from "react-icons/go";
import { LuPen } from "react-icons/lu";
import { RxReload } from "react-icons/rx";
import { Link } from "react-router-dom";

const AccountOptions = () => {
  return (
    <div className="col-span-6 bg-neutral-700/60   w-full rounded-md  space-y-5 ">
      <div className="space-y-2  w-full mb-5">
        <h1 className="font-bold text-2xl tracking-tight text-neutral-100  pt-7 pb-3 px-5 py-3">
          Compte
        </h1>
        <Link
          to="../account/profile"
          className="block  grid  md:grid-cols-4 grid-cols-3 grid-4 w-full  h-[3.5rem] rounded-md text-sm text-neutral-50 transition-colors hover:bg-neutral-800 focus:border-2"
        >
          <div className="col-span-3 flex items-center px-2">
            <div className="rounded-md bg-neutral-700 justify-center items-center p-2">
              <LuPen className="h-5 w-5 text-neutral-400"></LuPen>
            </div>
            <p className="text-neutral-300 font-semibold text-base pl-3 md:block hidden ">
              Modifier le profil
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-end pr-5">
            <GoChevronRight className="w-7 h-7 mr-0.5 text-neutral-50 "></GoChevronRight>
          </div>
        </Link>
        <Link
          to="../account/recover-playlists"
          className="block  grid  md:grid-cols-4 grid-cols-3 grid-4 w-full  h-[3.5rem] rounded-md text-sm text-neutral-50 transition-colors hover:bg-neutral-800 focus:border-2"
        >
          <div className="col-span-3 flex items-center px-2">
            <div className="rounded-md bg-neutral-700 justify-center items-center p-2">
              <RxReload className="h-5 w-5 text-neutral-400" />
            </div>
            <p className="text-neutral-300 font-semibold text-base pl-3 md:block hidden ">
              Restaurer des playlists
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-end pr-5">
            <GoChevronRight className="w-7 h-7 mr-0.5 text-neutral-50 "></GoChevronRight>
          </div>
        </Link>
        <Link
          to="../account/address"
          className="block  grid  md:grid-cols-4 grid-cols-3 grid-4 w-full  h-[3.5rem] rounded-md text-sm text-neutral-50 transition-colors hover:bg-neutral-800 focus:border-2"
        >
          <div className="col-span-3 flex items-center px-2">
            <div className="rounded-md bg-neutral-700 justify-center items-center p-2">
              <GoHome className="h-5 w-5 text-neutral-400" />
            </div>
            <p className="text-neutral-300 font-semibold text-base pl-3 md:block hidden ">
              Adresse
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-end pr-5">
            <GoChevronRight className="w-7 h-7 mr-0.5 text-neutral-50 "></GoChevronRight>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AccountOptions;
