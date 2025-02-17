import { Link } from "react-router-dom";
import AccountFooter from "../../../components/footer/AccountFooter";
import Header from "../headers/Header";
import { GoChevronLeft } from "react-icons/go";
import AddressForm from "../../../components/account/AddressForm";

const Address = () => {
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
            <AddressForm isPaymentAddress="false"></AddressForm>
          </div>
        </div>
      </div>
      <AccountFooter></AccountFooter>
    </>
  );
};

export default Address;
