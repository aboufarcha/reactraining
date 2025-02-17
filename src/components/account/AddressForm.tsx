import { useEffect, useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

const AddressForm = (props: any) => {
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    console.log("Props : ", props);
  }, []);

  const handleClick = () => {
    setIsEdit(true);
  };

  const handleCancel = () => {
    setIsEdit(false);
  };
  return (
    <>
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
          {props.isPaymentAddress == "false" ? (
            <>
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
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default AddressForm;
