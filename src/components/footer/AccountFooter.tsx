import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AccountFooter = () => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between mb-10 mt-16 ">
        <div className="grid grid-cols-6 gap-20 ">
          <div className="col-span-1">
            <div className="text-2xl font-bold">
              <Link
                to={"/"}
                className="flex items-center gap-x-0.5 text-neutral-50"
              >
                <FaSpotify className="w-10 h-10"></FaSpotify>
                <p className="ml-2 font-bold text-2xl tracking-tight">
                  Spotify
                </p>
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <div className="space-y-5">
              <p className="font-semibold text-neutral-500">SOCIETE</p>
              <p className="font-semibold text-neutral-50 hover:text-green-500">
                A propos
              </p>
              <p className="font-semibold text-neutral-50 hover:text-green-500">
                Offres d'emploi
              </p>
              <p className="font-semibold text-neutral-50 hover:text-green-500">
                For the Record
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="space-y-5">
              <p className="font-semibold text-neutral-500">COMMUNAUTES</p>
              <p className="font-semibold text-neutral-50 hover:text-green-500">
                Espace artisties
              </p>
              <p className="font-semibold text-neutral-50 hover:text-green-500">
                Développeurs
              </p>
              <p className="font-semibold text-neutral-50 hover:text-green-500">
                Campagnes publicitaires
              </p>
              <p className="font-semibold text-neutral-50 hover:text-green-500">
                Investisseurs
              </p>
              <p className="font-semibold text-neutral-50 hover:text-green-500">
                Fournisseurs
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="space-y-5">
              <p className="font-semibold text-neutral-500">LIENS UTILES</p>
              <p className="font-semibold text-neutral-50 hover:text-green-500">
                Assistance
              </p>
              <p className="font-semibold text-neutral-50 hover:text-green-500">
                Lecteur Web
              </p>
              <p className="font-semibold text-neutral-50 hover:text-green-500">
                Appli mobile gratuite
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="space-y-5">
              <p className="font-semibold text-neutral-500">
                ABONNEMENTS SPOTIFY
              </p>
              <p className="font-semibold text-neutral-50 hover:text-green-500">
                Premium Personnel
              </p>
              <p className="font-semibold text-neutral-50 hover:text-green-500">
                Premium Duo
              </p>
              <p className="font-semibold text-neutral-50 hover:text-green-500">
                Premium Famille
              </p>
              <p className="font-semibold text-neutral-50 hover:text-green-500">
                Premium Etudiants
              </p>
              <p className="font-semibold text-neutral-50 hover:text-green-500">
                Spotify Free
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex">
              <div className="flex rounded-full bg-neutral-700 h-12 w-12 justify-center items-center mr-5 ">
                <BsInstagram className="w-6 h-6 text-neutral-50" />
              </div>
              <div className="flex rounded-full bg-neutral-700 h-12 w-12 justify-center items-center mr-5">
                <BsTwitterX className="w-6 h-6 text-neutral-50" />
              </div>
              <div className="flex rounded-full bg-neutral-700 h-12 w-12 justify-center items-center">
                <BsFacebook className="w-6 h-6 text-neutral-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountFooter;
