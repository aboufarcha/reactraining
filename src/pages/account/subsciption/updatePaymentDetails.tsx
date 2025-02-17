import { Link } from "react-router-dom";
import AccountFooter from "../../../components/footer/AccountFooter";
import Header from "../headers/Header";
import { GoChevronLeft } from "react-icons/go";
import AddressForm from "../../../components/account/AddressForm";
import {
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaPaypal,
} from "react-icons/fa6";
import { SiAmericanexpress, SiMastercard } from "react-icons/si";

const UpdatePaymentDetails = () => {
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
          </div>
          <div className=" mt-10 flex mx-auto max-w-[550px] items-center justify-center">
            <div className="space-x-0">
              <h1 className="font-bold text-3xl tracking-tight text-neutral-200 mb-5">
                Modifier mes informations de paiement
              </h1>
              <p className="text-neutral-50  text-md font-normal mb-5">
                18,21 € par mois. La mise à jour de votre abonnement actuel sera
                visible à votre prochaine date de facturation.
              </p>
              <p className="text-neutral-50  text-sm font-bold mb-5">Adresse</p>
              <p className="text-neutral-50  text-sm font-bold mb-5">
                <a href="#" className="underline hover:text-green-500">
                  Découvrez pourquoi
                </a>{" "}
                nous avons besoin de ces informations.
              </p>
              <AddressForm isPaymentAddress="true"></AddressForm>
              <div className="rounded-sm border-2 border-neutral-500 w-full mt-5 ">
                <div className="flex py-5 px-3">
                  <input type="radio"></input>
                  <div className="space-y-1 px-5">
                    <p className="text-neutral-50 font-semibold">Visa</p>
                    <div className="flex items-center ">
                      <FaCcVisa className="text-neutral-50 h-8 w-8" />
                      <p className="ml-2">*** 8932 \ 06/27 </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-sm border-2 border-neutral-500 w-full ">
                <div className="flex py-5 px-3">
                  <input type="radio"></input>
                  <div className="space-y-1 px-5">
                    <p className="text-neutral-50 font-semibold">Visa</p>
                    <div className="flex items-center ">
                      <FaCcVisa className="text-neutral-50 h-8 w-8" />
                      <FaCcMastercard className=" h-8 w-8 ml-2" />
                      <SiAmericanexpress className=" h-8 w-8 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-sm border-2 border-neutral-500 w-full ">
                <div className="flex py-5 px-3">
                  <input type="radio"></input>
                  <div className="space-y-1 px-5">
                    <p className="text-neutral-50 font-semibold">Paypal</p>
                    <div className="flex items-center ">
                      <FaCcPaypal className="text-neutral-50 h-8 w-8" />
                    </div>
                  </div>
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

export default UpdatePaymentDetails;
