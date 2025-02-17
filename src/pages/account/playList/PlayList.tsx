import { Link } from "react-router-dom";
import AccountFooter from "../../../components/footer/AccountFooter";
import Header from "../headers/Header";
import { GoChevronLeft } from "react-icons/go";
import { IoMdInformationCircleOutline } from "react-icons/io";

const PlayList = () => {
  return (
    <>
      <div className="flex justify-center   bg-neutral-900 min-h-[950px]">
        <div className="flex-1 max-w-7xl overflow-y-scroll overflow-x-hidden bg-neutral-900 rounded-md relative">
          <div className="sticky top-0 z-50">
            <Header />
          </div>
          <div className="grid grid-cols-6  place-content-start justify-items-start max-w-[900px]  mx-auto p-[32px_8px] gap-5   ">
            <div className="col-span-6 w-full mt-6">
              <Link
                to="../account"
                className="w-12 h-12 rounded-full bg-neutral-700/70 text-neutral-200 flex items-center justify-center hover:bg-neutral-700/40 focus:border-4"
              >
                <GoChevronLeft className="w-10 h-10 mr-0.5"></GoChevronLeft>
              </Link>
            </div>
            <div className="col-span-6 w-full mt-10 ">
              <h1 className="font-bold text-5xl tracking-tight text-neutral-200">
                Restaurer des playlists
              </h1>
            </div>

            <div className="col-span-6 w-full mt-10 mb-8 rounded-md bg-neutral-700 h-">
              <div className="block  grid  md:grid-cols-4 grid-cols-3 grid-4 w-full  h-[3.5rem] rounded-md text-sm text-neutral-50 transition-colors hover:bg-neutral-800">
                <div className="col-span-4 flex items-center px-2">
                  <div className="rounded-md bg-neutral-700 justify-center items-center p-2">
                    <IoMdInformationCircleOutline className="w-8 h-8 mr-0.5"></IoMdInformationCircleOutline>
                  </div>
                  <p className="text-neutral-50 font-semibold text-base pl-3 md:block hidden ">
                    Vous n'avez supprimé aucune playlist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AccountFooter></AccountFooter>
    </>
  );
};

export default PlayList;
