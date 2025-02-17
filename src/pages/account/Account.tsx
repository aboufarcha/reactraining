import { GoSearch } from "react-icons/go";
import Header from "./headers/Header";
import Subscription from "./subsciption/Subsciption";
import { LuPen } from "react-icons/lu";
import { BsCreditCard } from "react-icons/bs";
import AccountOptions from "./account/AccountOptions";
import SubscriptionOptions from "./account/SubscriptionOptions";
import PaiementOptions from "./account/PaiementOptions";
import SecurityOptions from "./account/SecurityOptions";
import AideOptions from "./account/AideOptions";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="flex justify-center  min-h-screen bg-neutral-900">
      <div className="flex-1 max-w-7xl overflow-y-scroll overflow-x-hidden bg-neutral-900 rounded-md relative">
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <div className="grid grid-cols-6  place-content-start justify-items-start max-w-[900px] min-h-[800px] mx-auto p-[32px_8px] gap-5   ">
          <div className="col-span-6 w-full">
            <div className="relative transition-all duration-300 w-full  border border-neutral-400 rounded-md hover:border-white hover:border-4 focus:border-white focus:border-4 ">
              <GoSearch className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400"></GoSearch>
              <input
                type="text"
                placeholder="Rechercher un compte ou des articles d'aide"
                className="w-full bg-neutral-700 rounded-md pl-10 pr-3 py-3 outline-none text-neutral-400 "
              />
            </div>
          </div>
          <Subscription></Subscription>
          <div className="col-span-2 w-full rounded-md ">
            <Link
              to="../account/profile"
              className=" w-full flex h-[48%]  bg-neutral-700/60 rounded-md transition-colors hover:bg-neutral-700/30 justify-center items-center p-8 mb-3"
            >
              <div className="space-y-2">
                <p>
                  <LuPen className="h-6 w-6 w-[100%] "></LuPen>
                </p>
                <p className="text-md w-full">
                  <strong>Modifier le profil</strong>
                </p>
              </div>
            </Link>
            <div className=" w-full flex h-[48%]  bg-neutral-700/60 rounded-md transition-colors hover:bg-neutral-700/30 justify-center items-center p-8">
              <div className="space-y-2">
                <p>
                  <BsCreditCard className="h-6 w-6 w-[100%] "></BsCreditCard>
                </p>
                <p className="text-md w-full">
                  <strong>Mettre à jour la carte</strong>
                </p>
              </div>
            </div>
          </div>
          <AccountOptions></AccountOptions>
          <SubscriptionOptions></SubscriptionOptions>
          <PaiementOptions></PaiementOptions>
          <SecurityOptions></SecurityOptions>
          <AideOptions></AideOptions>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Account;
