import { Link } from "react-router-dom";
import AccountFooter from "../../../components/footer/AccountFooter";
import Header from "../headers/Header";
import { GoChevronLeft } from "react-icons/go";
import AddressForm from "../../../components/account/AddressForm";

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
              <div className="max-w-[750px]">
                <AddressForm isPaymentAddress="true"></AddressForm>
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
