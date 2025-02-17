import { CiBoxList } from "react-icons/ci";
import { GoArrowRight, GoChevronRight } from "react-icons/go";
import { ImEye } from "react-icons/im";
import { LiaLockSolid } from "react-icons/lia";
import { LuBell } from "react-icons/lu";
import { MdGridView } from "react-icons/md";

const SecurityOptions = () => {
  return (
    <div className="col-span-6 bg-neutral-700/60   w-full rounded-md  space-y-5 ">
      <div className="space-y-2  w-full mb-5">
        <h1 className="font-bold text-2xl tracking-tight text-neutral-100  pt-7 pb-3 px-5 py-3">
          Sécurité et confidentialité
        </h1>
        <button className="block  grid  md:grid-cols-4 grid-cols-3 grid-4 w-full  h-[3.5rem] rounded-md text-sm text-neutral-50 transition-colors hover:bg-neutral-800 focus:border-2">
          <div className="col-span-3 flex items-center px-2">
            <div className="rounded-md bg-neutral-700 justify-center items-center p-2">
              <LiaLockSolid className="h-5 w-5 text-neutral-400" />
            </div>
            <p className="text-neutral-300 font-semibold text-base pl-3 md:block hidden ">
              Changer le mot de passe
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-end pr-5">
            <GoChevronRight className="w-7 h-7 mr-0.5 text-neutral-50 "></GoChevronRight>
          </div>
        </button>
        <button className="block  grid  md:grid-cols-4 grid-cols-3 grid-4 w-full  h-[3.5rem] rounded-md text-sm text-neutral-50 transition-colors hover:bg-neutral-800 focus:border-2">
          <div className="col-span-3 flex items-center px-2">
            <div className="rounded-md bg-neutral-700 justify-center items-center p-2">
              <MdGridView className="h-5 w-5 text-neutral-400" />
            </div>
            <p className="text-neutral-300 font-semibold text-base pl-3 md:block hidden ">
              Gérer les applis
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-end pr-5">
            <GoChevronRight className="w-7 h-7 mr-0.5 text-neutral-50 "></GoChevronRight>
          </div>
        </button>
        <button className="block  grid  md:grid-cols-4 grid-cols-3 grid-4 w-full  h-[3.5rem] rounded-md text-sm text-neutral-50 transition-colors hover:bg-neutral-800 focus:border-2">
          <div className="col-span-3 flex items-center px-2">
            <div className="rounded-md bg-neutral-700 justify-center items-center p-2">
              <LuBell className="h-5 w-5 text-neutral-400" />
            </div>
            <p className="text-neutral-300 font-semibold text-base pl-3 md:block hidden ">
              Paramètres de notification
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-end pr-5">
            <GoChevronRight className="w-7 h-7 mr-0.5 text-neutral-50 "></GoChevronRight>
          </div>
        </button>
        <button className="block  grid  md:grid-cols-4 grid-cols-3 grid-4 w-full  h-[3.5rem] rounded-md text-sm text-neutral-50 transition-colors hover:bg-neutral-800 focus:border-2">
          <div className="col-span-3 flex items-center px-2">
            <div className="rounded-md bg-neutral-700 justify-center items-center p-2">
              <ImEye className="h-5 w-5 text-neutral-400" />
            </div>
            <p className="text-neutral-300 font-semibold text-base pl-3 md:block hidden ">
              Confidentialité du compte
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-end pr-5">
            <GoChevronRight className="w-7 h-7 mr-0.5 text-neutral-50 "></GoChevronRight>
          </div>
        </button>
        <button className="block  grid  md:grid-cols-4 grid-cols-3 grid-4 w-full  h-[3.5rem] rounded-md text-sm text-neutral-50 transition-colors hover:bg-neutral-800 focus:border-2">
          <div className="col-span-3 flex items-center px-2">
            <div className="rounded-md bg-neutral-700 justify-center items-center p-2">
              <CiBoxList className="h-5 w-5 text-neutral-400" />
            </div>
            <p className="text-neutral-300 font-semibold text-base pl-3 md:block hidden ">
              Modifier les méthodes de connexion
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-end pr-5">
            <GoChevronRight className="w-7 h-7 mr-0.5 text-neutral-50 "></GoChevronRight>
          </div>
        </button>
        <button className="block  grid  md:grid-cols-4 grid-cols-3 grid-4 w-full  h-[3.5rem] rounded-md text-sm text-neutral-50 transition-colors hover:bg-neutral-800 focus:border-2">
          <div className="col-span-3 flex items-center px-2">
            <div className="rounded-md bg-neutral-700 justify-center items-center p-2">
              <GoArrowRight className="h-5 w-5 text-neutral-400" />
            </div>
            <p className="text-neutral-300 font-semibold text-base pl-3 md:block hidden ">
              Se déconnecter de tous les appareils
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-end pr-5">
            <GoChevronRight className="w-7 h-7 mr-0.5 text-neutral-50 "></GoChevronRight>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SecurityOptions;
