import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { RiShareBoxLine } from "react-icons/ri";

const AccountOptions = () => {
  return (
    <div className="col-span-6 bg-neutral-700/60 transition-colors hover:bg-neutral-700/30 w-full rounded-md  space-y-5">
      <div className="space-y-2  w-full ">
        <h1 className="font-bold text-2xl tracking-tight text-neutral-100  pt-7 pb-3 px-5 py-3">
          Compte
        </h1>
        <button className="block  grid  md:grid-cols-4 grid-cols-3 grid-4 w-full  h-[3rem] text-sm text-neutral-50 hover:bg-neutral-500">
          <div className="col-span-3 flex items-center px-2">
            <p className="text-neutral-300 font-bold pl-3 md:block hidden ">
              Assistance
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

export default AccountOptions;
