import { Link } from "react-router-dom";
import Header from "../headers/Header";
import { GoChevronLeft } from "react-icons/go";
import AccountForm from "../../../components/account/AccountForm";

const Profile = () => {
  return (
    <div className="flex justify-center  min-h-screen bg-neutral-900">
      <div className="flex-1 max-w-7xl overflow-y-scroll overflow-x-hidden bg-neutral-900 rounded-md relative">
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <div className="grid grid-cols-6  place-content-start justify-items-start max-w-[900px]  mx-auto p-[32px_8px] gap-5   ">
          <div className="col-span-6 w-full mt-6">
            <Link
              to="../account"
              className="w-12 h-12 rounded-full bg-neutral-700/70 text-neutral-200 flex items-center justify-center hover:bg-neutral-700/40"
            >
              <GoChevronLeft className="w-10 h-10 mr-0.5"></GoChevronLeft>
            </Link>
          </div>
          <div className="col-span-6 w-full mt-14 mb-8">
            <h1 className="font-bold text-5xl tracking-tight text-neutral-200">
              Modifier le profil
            </h1>
          </div>
          <div className="col-span-6 w-full  mb-8">
            <AccountForm></AccountForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
