import { Link } from "react-router-dom";
import Header from "../headers/Header";
import { GoChevronLeft } from "react-icons/go";
import { FaCcVisa } from "react-icons/fa6";
import AccountFooter from "../../../components/footer/AccountFooter";

const ManagePlan = () => {
  return (
    <>
      <div className="flex justify-center  min-h-screen bg-neutral-900 mb-20">
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
            <div className="col-span-6 w-full mt-14 mb-8">
              <h1 className="font-bold text-5xl tracking-tight text-neutral-200">
                Gérer votre abonnement
              </h1>
            </div>
            <div className="col-span-6 mb-8 rounded-lg  w-full">
              <div className=" bg-neutral-800 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="h-[12rem] w-full bg-[#a5bbd1] rounded-t-lg flex items-center ">
                  <h1 className="font-bold text-4xl tracking-tight text-neutral-900 ml-5">
                    Premium Famille
                  </h1>
                </div>

                <div className="p-5">
                  <div className="flex grid grid-cols-2 md:grid-1 sm:grid-col-1 mb-8">
                    <div className="col-span-1">
                      <ul>
                        <li className="text-neutral-50 text-md text-md mb-3">
                          <span>
                            <div>
                              <strong className="mr-2 text-semibold">•</strong>{" "}
                              Jusqu'à 6&nbsp;comptes&nbsp;Premium ou
                              Spotify&nbsp;Kids
                            </div>
                          </span>
                        </li>
                        <li className="text-neutral-50 text-md text-md mb-3">
                          <span>
                            <div>
                              <strong className="mr-2 text-semibold">•</strong>{" "}
                              Contrôlez le contenu marqué comme explicite
                            </div>
                          </span>
                        </li>
                        <li className="text-neutral-50 text-md text-md mb-3">
                          <span>
                            <div>
                              <strong className="mr-2 text-semibold">•</strong>{" "}
                              Accédez à Spotify&nbsp;Kids
                            </div>
                          </span>
                        </li>
                        <li className="text-neutral-50 text-md text-md mb-3">
                          <span>
                            <div>
                              <strong className="mr-2 text-semibold">•</strong>{" "}
                              Annulez à tout moment
                            </div>
                          </span>
                        </li>
                        <li className="text-neutral-50 text-md text-md mb-3">
                          <span>
                            <div>
                              {" "}
                              <strong className="mr-2 text-semibold">
                                •
                              </strong>{" "}
                              12&nbsp;heures/mois d'écoute de notre catalogue
                              d'abonnement de livres audio (gestionnaire de
                              l'abonnement uniquement)
                            </div>
                          </span>
                        </li>
                      </ul>
                      <div className="mt-5">
                        <Link
                          to={""}
                          className="w-fit text-neutral-50   hover:text-neutral-50 hover:scale-105 ease-in-out duration-100 hover:text-green-500 underline"
                        >
                          Gérer votre temps d'écoute de livres audio
                        </Link>
                        <p className="text-neutral-400">
                          Suivez votre nombre d'heures incluses.
                        </p>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="space-y-5">
                        <h1 className="text-neutral-50 text-2xl font-semibold">
                          Paiement
                        </h1>
                        <p className="text-neutral-50">
                          Votre prochaine facture sera de{" "}
                          <strong>18,21 €</strong>. Elle sera prélevée le{" "}
                          <strong>15/03/2025</strong>.
                        </p>
                      </div>
                      <div className="mt-5">
                        <div className="flex">
                          <FaCcVisa className="text-neutral-50 h-8 w-8" />
                          <div className="space-y-1">
                            <p className="ml-2 text-neutral-50 text-base">
                              Carte Visa se terminant par 8932
                            </p>
                            <p className="ml-2 text-neutral-400 text-sm ">
                              Expiration : 06/2027
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end  p-8">
                        <Link
                          to={""}
                          className="w-fit text-neutral-400  font-semibold hover:text-neutral-50 hover:scale-105 ease-in-out duration-100"
                        >
                          Mettre à jour
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="flex justify-start gap-x-5">
                <Link
                  to={""}
                  className="border-2 border-neutral-500 rounded-full py-3 px-5 text-neutral-50 font-bold hover hover:scale-105 ease-in-out duration-100 hover:border-3 hover:border-neutral-50"
                >
                  Changer d'abonnement
                </Link>
                <Link
                  to={""}
                  className="border-2 border-neutral-500 rounded-full py-3 px-5 text-neutral-50 font-bold hover hover:scale-105 ease-in-out duration-100 hover:border-3 hover:border-neutral-50"
                >
                  Annuler l'abonnement
                </Link>
              </div>
            </div>
            <div className="col-span-6">
              <div className="space-y-16">
                <h1 className="font-bold text-2xl tracking-tight text-neutral-50">
                  Gérer vos comptes Famille
                </h1>
                <p className="text-neutral-50">
                  Vous souhaitez ajouter ou supprimer des membres ?
                </p>
              </div>
            </div>
            <div className="col-span-6">
              <div className="flex justify-start gap-x-5">
                <Link
                  to={""}
                  className="border-2 border-neutral-500 rounded-full py-3 px-5 text-neutral-50 font-bold hover hover:scale-105 ease-in-out duration-100 hover:border-3 hover:border-neutral-50"
                >
                  Continuer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AccountFooter></AccountFooter>
    </>
  );
};

export default ManagePlan;
