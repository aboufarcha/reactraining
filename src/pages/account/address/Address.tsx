import { Link } from "react-router-dom";
import AccountFooter from "../../../components/footer/AccountFooter";
import Header from "../headers/Header";
import { GoChevronLeft } from "react-icons/go";
import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Address = () => {
  const [isEdit, setIsEdit] = useState(false);

  const handleClick = () => {
    setIsEdit(true);
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  return (
    <>
      <div className="flex justify-center  min-h-[950px] bg-neutral-900 mb-20">
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
            <div className="col-span-6 w-full mt-14 mb-5">
              <h1 className="font-bold text-5xl tracking-tight text-neutral-200">
                Votre adresse
              </h1>
            </div>
            <div className="col-span-6 w-full">
              <h1 className="font-bold text-2xl tracking-tight text-neutral-50">
                Saisissez votre adresse de facturation
              </h1>
            </div>
            <div className="col-span-6 w-full mb-9">
              <p className=" text-md  text-neutral-50">
                <a href="#" className="underline">
                  {" "}
                  Découvrez pourquoi{" "}
                </a>
                Nous avons besoin de ces informations.
              </p>
            </div>
            <div className="col-span-6 w-full">
              <p className=" text-sm  text-neutral-50">
                Pour en savoir plus sur la façon dont Spotify recueille,
                exploite, partage et protège vos données personnelles, veuillez
                lire la{" "}
                <a href="#" className="underline">
                  Politique de confidentialité
                </a>{" "}
                de Spotify.
              </p>
            </div>
            {!isEdit ? (
              <div className="col-span-6 w-full rounded-sm border-2 border-neutral-800 h-full">
                <div className="flex items-center justify-between py-8 px-5">
                  <div className="space-y-0">
                    <p className="font-normal">France</p>
                    <p className="font-semibold text-neutral-50">FR</p>
                  </div>
                  <div className="justify-end">
                    <button
                      onClick={handleClick}
                      className="text-green-500 font-bold hover:scale-105 ease-in-out duration-100"
                    >
                      Modifier
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="col-span-6 w-full  h-full">
                  <div className="space-y-2">
                    <h3 className=" font-semibold text-neutral-50 ">Région</h3>
                    <select
                      name="pets"
                      id="pet-select"
                      className="w-full bg-neutral-900 rounded-md pl-2 pr-3 py-3 border border-1 border-neutral-600 text-neutral-50 "
                    >
                      <option value="">France</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-6 w-full rounded-sm py-2 bg-[#ffa42b] px-1">
                  <div className="block  grid  md:grid-cols-4 grid-cols-3 grid-4 w-full  h-[3.5rem] rounded-md text-sm text-black ">
                    <div className="col-span-4 flex items-center px-2">
                      <div className="rounded-md justify-center items-center p-2">
                        <IoMdInformationCircleOutline className="w-8 h-8 mr-0.5"></IoMdInformationCircleOutline>
                      </div>
                      <p className="text-black  text-base pl-3 md:block hidden ">
                        L'adresse sera également mise à jour dans votre compte.
                        Cela peut affecter vos frais d'abonnement mensuels en
                        raison des taxes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-6 w-full  py-2 px-1 mb-6">
                  <div className="flex justify-center items-center">
                    <button
                      type="submit"
                      className="w-3/5 px-8 h-12 rounded-full bg-green-500 text-lg text-neutral-900 font-bold flex items-center justify-center hover:scale-105 ease-in-out duration-100"
                    >
                      Sauvegarder l'adresse
                    </button>
                  </div>
                  <div className="flex justify-center items-center mt-5">
                    <button
                      onClick={handleCancel}
                      className="w-fit text-neutral-400 text-lg font-bold hover:text-neutral-50 hover:scale-105 ease-in-out duration-100"
                    >
                      Annuler
                    </button>
                  </div>
                </div>
                <div className="col-span-6 w-full  h-full mb-6">
                  <p className="text-neutral-50 text-sm  ">
                    Pour en savoir plus sur la façon dont Spotify recueille,
                    exploite, partage et protège vos données personnelles,
                    veuillez lire la{" "}
                    <a href="#" className="underline">
                      Politique de confidentialité
                    </a>{" "}
                    de Spotify.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <AccountFooter></AccountFooter>
    </>
  );
};

export default Address;
